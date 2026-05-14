-- ============================================================
-- MyReps Michigan — Supabase Database Setup
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. PROFILES TABLE
-- Auto-created when a user signs up via the trigger below.
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  phone text,
  party text,
  address text,
  state text default 'MI',
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Users can read their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Users can insert their own profile (for the trigger)
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);


-- 2. AUTO-CREATE PROFILE ON SIGNUP
-- This function runs automatically when a new user signs up.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email,
    coalesce(new.raw_user_meta_data->>'phone', '')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Drop existing trigger if it exists, then create
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 3. BALLOT PLANS TABLE
-- Stores the user's ballot selections in the cloud.
create table if not exists public.ballot_plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  choices jsonb default '{}'::jsonb,
  proposals jsonb default '[]'::jsonb,
  custom_offices jsonb default '[]'::jsonb,
  party text,
  address text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.ballot_plans enable row level security;

-- Users can CRUD their own ballot plans
create policy "Users can view own ballot plans"
  on public.ballot_plans for select
  using (auth.uid() = user_id);

create policy "Users can insert own ballot plans"
  on public.ballot_plans for insert
  with check (auth.uid() = user_id);

create policy "Users can update own ballot plans"
  on public.ballot_plans for update
  using (auth.uid() = user_id);

create policy "Users can delete own ballot plans"
  on public.ballot_plans for delete
  using (auth.uid() = user_id);


-- 4. AUTO-UPDATE TIMESTAMPS
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at();

drop trigger if exists ballot_plans_updated_at on public.ballot_plans;
create trigger ballot_plans_updated_at
  before update on public.ballot_plans
  for each row execute procedure public.update_updated_at();


-- 5. INDEXES
create index if not exists idx_ballot_plans_user_id on public.ballot_plans(user_id);
create index if not exists idx_profiles_email on public.profiles(email);

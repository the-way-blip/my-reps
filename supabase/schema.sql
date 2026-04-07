-- MyReps Supabase Database Schema
-- Run this migration in the Supabase SQL Editor

-- ============================================================
-- profiles table (extends Supabase auth.users)
-- ============================================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text,
  phone text,
  state text,
  address text,
  party_affiliation text,
  interests text[],
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- ============================================================
-- ballot_plans table
-- ============================================================
create table public.ballot_plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  choices jsonb default '{}',
  proposals jsonb default '[]',
  custom_offices jsonb default '[]',
  updated_at timestamptz default now()
);

alter table public.ballot_plans enable row level security;

create policy "Users can manage own ballot"
  on public.ballot_plans for all
  using (auth.uid() = user_id);

-- ============================================================
-- community_votes table (anonymized for aggregate stats)
-- ============================================================
create table public.community_votes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete set null,
  state text not null,
  office_id text not null,
  candidate_name text,
  party text,
  created_at timestamptz default now(),
  unique(user_id, office_id)
);

alter table public.community_votes enable row level security;

create policy "Users can manage own votes"
  on public.community_votes for all
  using (auth.uid() = user_id);

create policy "Anyone can view aggregate"
  on public.community_votes for select
  using (true);

-- ============================================================
-- Trigger: auto-create profile on signup
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, phone)
  values (
    new.id,
    new.raw_user_meta_data->>'name',
    new.email,
    new.phone
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- Trigger: auto-update updated_at column
-- ============================================================
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();

create trigger ballot_plans_updated_at
  before update on public.ballot_plans
  for each row execute function public.update_updated_at();

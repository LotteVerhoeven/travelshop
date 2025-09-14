import supabase from "./supabaseClient";
import type { Trip, TripDetails } from '../types';


export async function getAllTrips(): Promise<Trip[]> {
  const { data, error } = await supabase.from("trips").select("*");
  if (error) throw error;
  return data;
}

export async function getTripBySlug(slug: string): Promise<Trip | null> {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getTripDetails(tripId: string): Promise<TripDetails | null> {
  const { data, error } = await supabase
    .from("trip_details")
    .select("*")
    .eq("trip_id", tripId)
    .single();

  if (error) throw error;
  return data;
}

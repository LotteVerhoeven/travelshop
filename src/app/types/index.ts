export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Trip = {
  id: string;
  name: string;
  destination?: string | null;
  category?: string | null;
  duration_days?: number | null;
  short_description?: string | null;
  price: number;
  type: 'solo' | 'group';
  image_url?: string | null;
  departure_months?: string[] | null;
  slug: string;
};

export type TripDetails = {
  id: string;
  trip_id: string;
  start_dates?: string[] | null; 
  full_description?: string | null;
  capacity?: number | null;
  current_size?: number | null;
  gender_male?: number | null;
  gender_female?: number | null;
  average_age?: number | null;
  included?: string[] | null;
  not_included?: string[] | null;
};

export interface TripDetailsWithMeta extends TripDetails {
  trips: Pick<Trip, "name" | "slug" | "image_url" | "category" | "price">;
}
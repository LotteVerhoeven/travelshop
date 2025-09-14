import TripCard from "./TripCard";
import type { Trip } from '../types';

export default function TripsGrid({ trips }: { trips: Trip[] }) {
  if (!trips?.length) {
    return <p className="text-gray-500">No Travelpackages found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

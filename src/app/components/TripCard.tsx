import Link from "next/link";
import Image from "next/image";
import type { Trip } from '../types';

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={`/travelpackages/${trip.slug}`}
      className="block group"
      aria-labelledby={`trip-${trip.name}-title`}
    >
      <article className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
        <div className="relative aspect-video">
          <Image
            src={trip.image_url ?? '/placeholder.jpg'}
            alt={trip.name}
            width={4576} 
            height={3432}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h2
            id={`trip-${trip.id}-title`}
            className="text-lg font-semibold text-gray-800 line-clamp-2"
          >
            {trip.name}
          </h2>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {trip.short_description}
          </p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm border text-gray-800 px-2 py-0.5 rounded">
              {trip.category}
            </span>
            <span className="text-gray-800 font-medium">
              €{trip.price}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}


import { getTripDetails, getTripBySlug } from "@/app/lib/queries";
import Link from "next/link";

export default async function TripDetailPage({ params }: { params: { slug: string } }) {
  const trip = await getTripBySlug(params.slug);
  console.log(params.slug);
  console.log(trip);
  if (!trip) {
    return <div>Trip not found</div>;
  }

  const details = await getTripDetails(trip.id);

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/travelpackages"
        className="text-grey-800 hover:underline mb-6 inline-block"
      >
        ← Back to all Travelpackages
      </Link>
      <h1 className="text-3xl font-bold">{trip.name}</h1>
      <p className="mb-6">{details?.full_description}</p>

      {details?.included && (
        <>
          <h2 className="text-xl font-semibold">Included</h2>
          <ul className="list-disc ml-6 mb-4">
            {details.included.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {details?.not_included && (
        <>
          <h2 className="text-xl font-semibold">Excluded</h2>
          <ul className="list-disc ml-6">
            {details.not_included.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

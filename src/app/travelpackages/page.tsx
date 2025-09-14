"use client";
import { useState, useEffect } from "react";
import { getAllTrips } from "../lib/queries";
import TripsGrid from "../components/TripsGrid";
import TripFilters from "../components/TripFilters";
import type { Trip } from '../types';

export default function Page() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const data = await getAllTrips();
        setTrips(data);
        setFilteredTrips(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchTrips();
  }, []);

  return (
    <main className="container mx-auto px-6 py-10">
      <TripFilters trips={trips} onFilter={setFilteredTrips} />
      <TripsGrid trips={filteredTrips} />
    </main>
  );
}


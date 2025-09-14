"use client";
import { useState, useEffect } from "react";
import type { Trip } from '../types';
import FilterSelect from "./FilterSelect";
import { getUniqueValues } from "../utils/getUniqueValues";

type Props = {
  trips: Trip[];
  onFilter: (filtered: Trip[]) => void;
};

export default function TripFilters({ trips, onFilter }: Props) {
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [month, setMonth] = useState("");

  const [destinations, setDestinations] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    if (trips.length > 0) {
      setDestinations(getUniqueValues(trips, "destination"));
      setCategories(getUniqueValues(trips, "category"));
      setTypes(getUniqueValues(trips, "type"));
      setMonths(getUniqueValues(trips, "departure_months"));
    }
  }, [trips]);

  useEffect(() => {
    let filtered = trips;

    if (destination) {
      filtered = filtered.filter((t) => t.destination === destination);
    }
    if (category) {
      filtered = filtered.filter((t) => t.category === category);
    }
    if (type) {
      filtered = filtered.filter((t) => t.type === type);
    }
    if (month) {
      filtered = filtered.filter((t) => (t.departure_months || []).includes(month));
    }

    onFilter(filtered);
  }, [destination, category, type, month, trips, onFilter]);

  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <FilterSelect
        label="Destinations"
        options={destinations}
        value={destination}
        onChange={setDestination}
      />
      <FilterSelect
        label="Categories"
        options={categories}
        value={category}
        onChange={setCategory}
      />
      <FilterSelect
        label="Types"
        options={types}
        value={type}
        onChange={setType}
      />
      <FilterSelect
        label="Departure Months"
        options={months}
        value={month}
        onChange={setMonth}
      />
    </div>
  );
}

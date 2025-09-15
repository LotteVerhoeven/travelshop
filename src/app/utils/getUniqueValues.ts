const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getUniqueValues<T extends Record<string, unknown>, K extends keyof T>(
  items: T[],
  key: K
): string[] {
  const values = items.flatMap((item) => {
    const value = item[key];
    return Array.isArray(value) ? value : [value];
  });

  const unique = Array.from(new Set(values)).filter(Boolean).map(String);

  if (key === "departure_months") {
    return unique.sort(
      (a, b) =>
        MONTH_ORDER.indexOf(a.trim()) - MONTH_ORDER.indexOf(b.trim())
    );
  }

  return unique.sort();
}

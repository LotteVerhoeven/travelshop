export function getUniqueValues<T extends keyof any>(
  items: any[],
  key: T
): string[] {
  const values = items.flatMap((item) =>
    Array.isArray(item[key]) ? item[key] : [item[key]]
  );
  return Array.from(new Set(values)).filter(Boolean);
}

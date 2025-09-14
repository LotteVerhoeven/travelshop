export function getUniqueValues<T extends Record<string, unknown>, K extends keyof T>(
  items: T[],
  key: K
): string[] {
  const values = items.flatMap((item) => {
    const value = item[key];
    return Array.isArray(value) ? value : [value];
  });

  return Array.from(new Set(values)).filter(Boolean).map(String);
}


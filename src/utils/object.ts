export function entries<K extends string | number | symbol, V>(
  o: Record<K, V>
): Array<[K, V]> {
  return Object.entries(o) as Array<[K, V]>;
}

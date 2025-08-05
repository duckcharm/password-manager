export function basename(filename: string): string {
  return filename.substring(0, filename.lastIndexOf("."));
}

export function equalsIgnoreCase(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

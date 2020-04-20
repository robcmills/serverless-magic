export const compare = (primary: any, secondary: string, asc: boolean) => (a: any, b: any) => {
  if (a[primary] < b[primary]) {
    return asc ? -1 : 1;
  }
  if (a[primary] > b[primary]) {
    return asc ? 1 : -1;
  }
  if (a[secondary] < b[secondary]) {
    return asc ? -1 : 1;
  }
  if (a[secondary] > b[secondary]) {
    return asc ? 1 : -1;
  }
  return 0;
}
export const sortBy = (field: string, asc: boolean = true) =>
  (array: any[]) => array.sort((a, b) => {
    if (a[field] < b[field]) {
      return asc ? -1 : 1;
    }
    if (a[field] > b[field]) {
      return asc ? 1 : -1;
    }
    return 0;
  });

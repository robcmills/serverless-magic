export function indexBy(arr: any[], key: string) {
  return arr.reduce((acc, item) => {
    const val = item[key];
    if (!val) {
      throw new Error(`No value for key[${key}] on item[${item}]`);
    }
    acc[val] = item;
    return acc;
  }, {});
}
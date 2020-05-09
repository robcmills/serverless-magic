// block for `time` ms, then return the number of loops we could run in that time:
export function expensive(time: number): number {
  const start = Date.now();
  let count = 0;
  while (Date.now() - start < time) {
    count++;
  }
  return count;
}
export function debounce<F extends Function>(func: F, wait = 20) {
  let timeoutId = 0;
  const callable = (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), wait);
  };
  return (callable as any) as F;
}
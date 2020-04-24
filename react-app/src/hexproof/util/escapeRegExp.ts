// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

export function escapeRegExp(regExp: string): string {
  return regExp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

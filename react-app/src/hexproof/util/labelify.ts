export function labelify(input: string): string {
  return input
  	.replace(/_/g, ' ')
  	.split(' ')
  	.map((token: string) => token[0].toUpperCase() + token.slice(1))
  	.join(' ');
}
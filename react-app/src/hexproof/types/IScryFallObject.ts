export type ScryFallObjectType =
	| 'error'
	| 'list'
	| 'set'
	| 'card'
	| 'related_card';

export interface IScryFallObject {
	object: ScryFallObjectType;
}

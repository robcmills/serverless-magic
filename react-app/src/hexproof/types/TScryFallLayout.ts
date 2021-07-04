/*
	The Layout property categorizes the arrangement of card parts, faces, and
	other bounded regions on cards. The layout can be used to programmatically
	determine which other properties on a card you can expect.

	Specifically:

	Cards with the layouts split, flip, transform, and double_faced_token will
	always have a card_faces property describing the distinct faces.
	Cards with the layout meld will always have a related_cards property pointing
	to the other meld parts.
*/

export type TScryFallLayout =
	'adventure' | // Cards with an Adventure spell part
	'art_series' | // Art Series collectable double-faced cards
	'augment' | // Cards with Augment
	'double_faced_token' | // Tokens with another token printed on the back
	'double_sided' | // A Magic card with two sides that are unrelated
	'emblem' | // Emblem cards
	'flip' | // Cards that invert vertically with the flip keyword
	'host' | // Host-type cards
	'leveler' | // Cards with Level Up
	'meld' | // Cards with meld parts printed on the back
	'normal' | // A standard Magic card with one face
	'planar' | // Plane and Phenomenon-type cards
	'saga' | // Saga-type cards
	'scheme' | // Scheme-type cards
	'split' | // A split-faced card
	'token' | // Token cards
	'transform' | // Double-sided cards that transform
	'vanguard'; // Vanguard-type cards
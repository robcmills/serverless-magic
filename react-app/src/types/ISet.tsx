import { URI } from 'types/URI';
import { UUID } from 'types/UUID';

/*
	Set Objects
	A Set object represents a group of related Magic cards. All Card objects on Scryfall belong to exactly one set.

	Due to Magic’s long and complicated history, Scryfall includes many un-official sets as a way to group promotional or outlier cards together. Such sets will likely have a code that begins with p or t, such as pcel or tori.

	Official sets always have a three-letter set code, such as zen.
*/

export interface ISet {
	id: UUID;	// A unique ID for this set on Scryfall that will not change.
	code: string; // The unique three to five-letter code for this set.
	mtgo_code: string | null; // The unique code for this set on MTGO, which may differ from the regular code.
	tcgplayer_id: number | null; // This set’s ID on TCGplayer’s API, also known as the groupId.
	name: string; // The English name of the set.
	set_type: TSetType; // A computer-readable classification for this set. See below.
	released_at: Date | null; // The date the set was released or the first card was printed in the set (in GMT-8 Pacific time).
	block_code: string | null; // The block code for this set, if any.
	block: string | null; // The block or group name code for this set, if any.
	parent_set_code: string | null; // The set code for the parent set, if any. promo and token sets often have a parent set.
	card_count: number; // The number of cards in this set.
	digital: boolean; // True if this set was only released on Magic Online.
	foil_only: boolean; // True if this set contains only foil cards.
	scryfall_uri: URI; // A link to this set’s permapage on Scryfall’s website.
	uri: URI; // A link to this set object on Scryfall’s API.
	icon_svg_uri: URI; // A URI to an SVG file for this set’s icon on Scryfall’s CDN. Hotlinking this image isn’t recommended, because it may change slightly over time. You should download it and use it locally for your particular user interface needs.
	search_uri: URI; // A Scryfall API URI that you can request to begin paginating over the cards in this set.
}

// Set Types
// Scryfall provides an overall categorization for each Set in the set_type property. An exhaustive list of set_types is listed below:
export type TSetType =
	'core' | // A yearly Magic core set (Tenth Edition, etc)
	'expansion' | // A rotational expansion set in a block (Zendikar, etc)
	'masters' | // A reprint set that contains no new cards (Modern Masters, etc)
	'masterpiece' | // Masterpiece Series premium foil cards
	'from_the_vault' | // From the Vault gift sets
	'spellbook' | // Spellbook series gift sets
	'premium_deck' | // Premium Deck Series decks
	'duel_deck' | // Duel Decks
	'draft_innovation' | // Special draft sets, like Conspiracy and Battlebond
	'treasure_chest' | // Magic Online treasure chest prize sets
	'commander' | // Commander preconstructed decks
	'planechase' | // Planechase sets
	'archenemy' | // Archenemy sets
	'vanguard' | // Vanguard card sets
	'funny' | // A funny un-set or set with funny promos (Unglued, Happy Holidays, etc)
	'starter' | // A starter/introductory set (Portal, etc)
	'box' | // A gift box set
	'promo' | // A set that contains purely promotional cards
	'token' | // A set made up of tokens and emblems.
	'memorabilia'; // A set made up of gold-bordered, oversize, or trophy cards that are not legal
import { IScryFallObject } from 'hexproof/types/IScryFallObject';
// import { Timestamp } from 'hexproof/types/Timestamp';
import { URI } from 'hexproof/types/URI';
import { UUID } from 'hexproof/types/UUID';

export interface IScryFallCard extends IScryFallObject {
	// Core Card Fields
	arena_id:	number; // Nullable This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
	id: UUID; // A unique ID for this card in Scryfall’s database.
	lang: String; // A language code for this printing.
	mtgo_id: number; // Nullable This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
	mtgo_foil_id: number; // Nullable This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
	multiverse_ids: UUID[]; // Nullable This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
	tcgplayer_id: number; // Nullable This card’s ID on TCGplayer’s API, also known as the productId.
	object: 'card'; // A content type for this object, always card.
	oracle_id: UUID; // A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (tokens, Unstable variants, etc).
	prints_search_uri: URI; // A link to where you can begin paginating all re/prints for this card on Scryfall’s API.
	rulings_uri: URI; // A link to this card’s rulings list on Scryfall’s API.
	scryfall_uri: URI; // A link to this card’s permapage on Scryfall’s website.
	uri: URI; // A link to this card object on Scryfall’s API.
}

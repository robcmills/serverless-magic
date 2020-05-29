import { IScryFallCardFace } from 'hexproof/types/IScryFallCardFace';
import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { IScryFallRelatedCard } from 'hexproof/types/IScryFallRelatedCard';
import { TScryFallColor } from 'hexproof/types/TScryFallColor';
import { TScryFallLegalities } from 'hexproof/types/TScryFallLegalities';
import { URI } from 'hexproof/types/URI';
import { UUID } from 'hexproof/types/UUID';

export interface IScryFallCard extends IScryFallObject {

	// Core Card Fields
	arena_id?:	number | null; // This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
	id: UUID; // A unique ID for this card in Scryfall’s database.
	lang: string; // A language code for this printing.
	mtgo_id?: number | null; // This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
	mtgo_foil_id?: number | null; // This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
	multiverse_ids?: number[] | null; // This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
	tcgplayer_id?: number | null; // This card’s ID on TCGplayer’s API, also known as the productId.
	object: 'card'; // A content type for this object, always card.
	oracle_id: UUID; // A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (tokens, Unstable variants, etc).
	prints_search_uri: URI; // A link to where you can begin paginating all re/prints for this card on Scryfall’s API.
	rulings_uri: URI; // A link to this card’s rulings list on Scryfall’s API.
	scryfall_uri: URI; // A link to this card’s permapage on Scryfall’s website.
	uri: URI; // A link to this card object on Scryfall’s API.

	// Gameplay Fields
	all_parts?: IScryFallRelatedCard[] | null; // If this card is closely related to other cards, this property will be an array with Related Card Objects.
	card_faces?: IScryFallCardFace[] | null; // An array of Card Face objects, if this card is multifaced.
	cmc: number; // The card’s converted mana cost. Note that some funny cards have fractional mana costs.
	colors?: TScryFallColor[] | null; // This card’s colors, if the overall card has colors defined by the rules. Otherwise the colors will be on the card_faces objects, see below.
	color_identity: TScryFallColor[]; // This card’s color identity.
	color_indicator?: TScryFallColor[] | null; // The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have one.
	edhrec_rank?: number | null; // This card’s overall rank/popularity on EDHREC. Not all cards are ranked.
	foil: boolean; // True if this printing exists in a foil version.
	hand_modifier?: string | null; // This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as -1.
	layout: string; // A code for this card’s layout.
	legalities: TScryFallLegalities; // An object describing the legality of this card across play formats. Possible legalities are legal, not_legal, restricted, and banned.
	life_modifier?: string | null; // This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as +2.
	loyalty?: string | null; // This loyalty if any. Note that some cards have loyalties that are not numeric, such as X.
	mana_cost?: string | null; // The mana cost for this card. This value will be any empty string "" if the cost is absent. Remember that per the game rules, a missing mana cost and a mana cost of {0} are different values. Multi-faced cards will report this value in card faces.
	name: string; // The name of this card. If this card has multiple faces, this field will contain both names separated by ␣//␣.
	nonfoil: boolean; // True if this printing exists in a nonfoil version.
	oracle_text?: string | null; // The Oracle text for this card, if any.
	oversized: boolean; // True if this card is oversized.
	power?: string | null; // This card’s power, if any. Note that some cards have powers that are not numeric, such as *.
	reserved: boolean; // True if this card is on the Reserved List.
	toughness?: string | null; // This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as *.
	type_line: string; // The type line of this card.

}

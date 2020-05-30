import { IScryFallCardFace } from 'hexproof/types/IScryFallCardFace';
import { IScryFallImageUris } from 'hexproof/types/IScryFallImageUris';
import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { IScryFallPreview } from 'hexproof/types/IScryFallPreview';
import { IScryFallPrices } from 'hexproof/types/IScryFallPrices';
import { IScryFallPurchaseUris } from 'hexproof/types/IScryFallPurchaseUris';
import { IScryFallRelatedCard } from 'hexproof/types/IScryFallRelatedCard';
import { IScryFallRelatedUris } from 'hexproof/types/IScryFallRelatedUris';

import { TScryFallColor } from 'hexproof/types/TScryFallColor';
import { TScryFallFrame } from 'hexproof/types/TScryFallFrame';
import { TScryFallFrameEffect } from 'hexproof/types/TScryFallFrameEffect';
import { TScryFallGame } from 'hexproof/types/TScryFallGame';
import { TScryFallLayout } from 'hexproof/types/TScryFallLayout';
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
	layout: TScryFallLayout; // A code for this card’s layout.
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

	// Print Fields
	// Cards have the following properties unique to their particular re/print:
	artist?: string; // Nullable The name of the illustrator of this card. Newly spoiled cards may not have this field yet.
	booster: boolean; // Whether this card is found in boosters.
	border_color: string; // This card’s border color: black, borderless, gold, silver, or white.
	card_back_id: UUID; // The Scryfall ID for the card back design present on this card.
	collector_number: string; // This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or ★.
	digital: boolean; // True if this is a digital card on Magic Online.
	flavor_name?: string; // Nullable The just-for-fun name printed on the card (such as for Godzilla series cards).
	flavor_text?: string; // Nullable The flavor text, if any.
	frame_effects?: TScryFallFrameEffect[]; // Nullable This card’s frame effects, if any.
	frame: TScryFallFrame; // This card’s frame layout.
	full_art: boolean; // True if this card’s artwork is larger than normal.
	games: TScryFallGame[]; // A list of games that this card print is available in, paper, arena, and/or mtgo.
	highres_image: boolean; // True if this card’s imagery is high resolution.
	illustration_id?: UUID; // Nullable A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
	image_uris?: IScryFallImageUris; // Nullable An object listing available imagery for this card.
	prices: IScryFallPrices; // An object containing daily price information for this card, including usd, usd_foil, eur, and tix prices, as strings.
	printed_name?: string; // Nullable The localized name printed on this card, if any.
	printed_text?: string; // Nullable The localized text printed on this card, if any.
	printed_type_line?: string; // Nullable The localized type line printed on this card, if any.
	promo: boolean; // True if this card is a promotional print.
	promo_types?: string[]; // Nullable An array of strings describing what categories of promo cards this card falls into.
	purchase_uris: IScryFallPurchaseUris; // An object providing URIs to this card’s listing on major marketplaces.
	rarity: string; // This card’s rarity. One of common, uncommon, rare, or mythic.
	related_uris: IScryFallRelatedUris; // An object providing URIs to this card’s listing on other Magic: The Gathering online resources.
	released_at: string; // The date this card was first released.
	reprint: boolean; // True if this card is a reprint.
	scryfall_set_uri: URI; // A link to this card’s set on Scryfall’s website.
	set_name: string; // This card’s full set name.
	set_search_uri: URI; // A link to where you can begin paginating this card’s set on the Scryfall API.
	set_type: string; // The type of set this printing is in.
	set_uri: URI; // A link to this card’s set object on Scryfall’s API.
	set: string; // This card’s set code.
	story_spotlight: boolean; // True if this card is a Story Spotlight.
	textless: boolean; // True if the card is printed without text.
	variation: boolean; // Whether this card is a variation of another printing.
	variation_of?: UUID; // Nullable The printing ID of the printing this card is a variation of.
	watermark?: string; // Nullable This card’s watermark, if any.
	preview?: IScryFallPreview; // Nullable Info about when and where this card was previewed.

}

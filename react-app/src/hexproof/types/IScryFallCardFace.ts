import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { TScryFallColor } from 'hexproof/types/TScryFallColor';
import { URI } from 'hexproof/types/URI';
import { UUID } from 'hexproof/types/UUID';

// Multiface cards have a card_faces property containing at least two Card Face
// objects. These objects have the following properties:

export interface IScryFallCardFace extends IScryFallObject {
	artist?: string | null; // The name of the illustrator of this card face. Newly spoiled cards may not have this field yet.
	color_indicator?: TScryFallColor[] | null; // The colors in this face’s color indicator, if any.
	colors?: TScryFallColor[] | null; // This face’s colors, if the game defines colors for the individual face of this card.
	flavor_text?: string | null; // The flavor text printed on this face, if any.
	illustration_id?: UUID | null; // A unique identifier for the card face artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
	image_uris?: Record<string, URI> | null; // An object providing URIs to imagery for this face, if this is a double-sided card. If this card is not double-sided, then the image_uris property will be part of the parent object instead.
	loyalty?: string | null; // This face’s loyalty, if any.
	mana_cost: string; // The mana cost for this face. This value will be any empty string "" if the cost is absent. Remember that per the game rules, a missing mana cost and a mana cost of {0} are different values.
	name: string; // The name of this particular face.
	object: 'card_face'; // A content type for this object, always card_face.
	oracle_text?: string | null; // The Oracle text for this face, if any.
	power?: string | null; // This face’s power, if any. Note that some cards have powers that are not numeric, such as *.
	printed_name?: string | null; // The localized name printed on this face, if any.
	printed_text?: string | null; // The localized text printed on this face, if any.
	printed_type_line?: string | null; // The localized type line printed on this face, if any.
	toughness?: string | null; // This face’s toughness, if any.
	type_line: string; // The type line of this particular face.
	watermark?: string | null; // The watermark on this particulary card face, if any.
}
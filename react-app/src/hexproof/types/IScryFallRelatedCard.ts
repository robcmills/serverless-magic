import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { TScryFallComponent } from 'hexproof/types/TScryFallComponent';
import { URI } from 'hexproof/types/URI';
import { UUID } from 'hexproof/types/UUID';

// Cards that are closely related to other cards (because they call them by
// name, or generate a token, or meld, etc) have a all_parts property that
// contains Related Card objects. Those objects have the following properties:

export interface IScryFallRelatedCard extends IScryFallObject {
	id:	UUID; // An unique ID for this card in Scryfall’s database.
	object:	'related_card'; // A content type for this object, always related_card.
	component: TScryFallComponent; // A field explaining what role this card plays in this relationship.
	name:	string; // The name of this particular related card.
	type_line: string; // The type line of this card.
	uri: URI; // A URI where you can retrieve a full object describing this card on Scryfall’s API.
}

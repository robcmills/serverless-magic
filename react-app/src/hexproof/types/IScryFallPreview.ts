import { URI } from 'hexproof/types/URI';

export interface IScryFallPreview {
	previewed_at: string; // The date this card was previewed.
	source: string; // The name of the source that previewed this card.
	source_uri: URI; // A link to the preview for this card.
}
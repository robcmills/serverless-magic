import { ContentEncoding } from 'hexproof/types/ContentEncoding';
import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { Timestamp } from 'hexproof/types/Timestamp';
import { URI } from 'hexproof/types/URI';
import { UUID } from 'hexproof/types/UUID';

export interface IScryFallBulkDataObject {
	id: UUID; // A unique ID for this bulk item.
	type: string; // A computer-readable string for the kind of bulk item.
	name: string; // A human-readable name for this file.
	description: string; // A human-readable description for this file.
	download_uri: URI; // The URL where this file can be downloaded.
	permalink_uri: URI; // The URL that hosts this bulk file.
	updated_at: Timestamp; // The time when this file was last updated.
	compressed_size: number; // The size of this file in integer bytes.
	content_type: MimeType; // The MIME type of this file.
	content_encoding: ContentEncoding; // The Content-Encoding encoding that will be used to transmit this file when you download it.
}
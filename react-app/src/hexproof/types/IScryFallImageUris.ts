import { URI } from 'hexproof/types/URI';

export interface IScryFallImageUris {
	art_crop: URI; // Varies JPG A rectangular crop of the card’s art only. Not guaranteed to be perfect for cards with outlier designs or strange frame arrangements
	border_crop: URI; // 480 × 680 JPG A full card image with the rounded corners and the majority of the border cropped off. Designed for dated contexts where rounded images can’t be used.
	large: URI; // 672 × 936 JPG A large full card image
	normal: URI; // 488 × 680 JPG A medium-sized full card image
	png: URI; // 745 × 1040 PNG A transparent, rounded full card PNG. This is the best image to use for videos or other high-quality content.
	small: URI; // 146 × 204 JPG A small full card image. Designed for use as thumbnail or list icon.
}
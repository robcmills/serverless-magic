/*
	The frame field tracks the major edition of the card frame used for the
	re/print in question. The frame has gone though several major revisions in
	Magic’s lifetime.
*/

export type TScryFallFrame =
  '1993' | // The original Magic card frame, starting from Limited Edition Alpha.
  '1997' | // The updated classic frame starting from Mirage block
  '2003' | // The “modern” Magic card frame, introduced in Eighth Edition and Mirrodin block.
  '2015' | // The holofoil-stamp Magic card frame, introduced in Magic 2015.
  'future'; // The frame used on cards from the future.
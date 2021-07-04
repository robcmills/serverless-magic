/*
	The frame_effects field tracks additional frame artwork applied over a
	particular frame. For example, there are both 2003 and 2015-frame cards with
	the Nyx-touched effect.
*/

export type TScryFallFrameEffect =
	'colorshifted' | // A colorshifted frame
	'companion' | // The cards have a companion frame
	'compasslanddfc' | // The compass and land transform marks
	'devoid' | // The Devoid frame effect
	'draft' | // The draft-matters frame effect
	'extendedart' | // An extended art frame
	'inverted' | // The FNM-style inverted frame
	'legendary' | // The cards have a legendary crown
	'miracle' | // The miracle frame effect
	'mooneldrazidfc' | // The moon and Eldrazi transform marks
	'moonreversemoondfc' | // The waxing and waning crescent moon transform marks
	'nyxtouched' | // The Nyx-touched frame effect
	'originpwdfc' | // The Origins and planeswalker transform marks
	'showcase' | // A custom Showcase frame
	'sunmoondfc' | // The sun and moon transform marks
	'tombstone' // The Odyssey tombstone mark
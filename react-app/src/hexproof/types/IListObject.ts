import { IScryFallObject } from 'hexproof/types/IScryFallObject';
import { URI } from 'hexproof/types/URI';

/*
  List Objects
  A List object represents a requested sequence of other objects (Cards, Sets, etc). List objects may be paginated, and also include information about issues raised when generating the list.
*/

export interface IListObject<T> extends IScryFallObject {
  data: T[]; // An array of the requested objects, in a specific order.
  has_more: boolean; // True if this List is paginated and there is a page beyond the current page.
  next_page: URI | null; // If there is a page beyond the current page, this field will contain a full API URI to that page. You may submit a HTTP GET request to that URI to continue paginating forward on this List.
  total_cards: number | null; // If this is a list of Card objects, this field will contain the total number of cards found across all pages.
  warnings: any[] | null; // An array of human-readable warnings issued when generating this list, as strings. Warnings are non-fatal issues that the API discovered with your input. In general, they indicate that the List will not contain all of the information you requested. You should fix the warnings and re-submit your request.
}


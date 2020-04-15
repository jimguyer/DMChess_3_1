import { IStartEmail } from './IStartEmail';
import { IStartParms } from './IStartParms';
import { ISearch } from './ISearch';

export interface IProfile {
  PhotoSrc: string;
  UserId: string;
  NameFirst: string;
  NameLast: string;
  Group: string;
  Rating: number;
  StartEmail: IStartEmail;
  StartParms: IStartParms;
  Search: ISearch;
  ActiveGames: number;
  WinsLosses: string;
}

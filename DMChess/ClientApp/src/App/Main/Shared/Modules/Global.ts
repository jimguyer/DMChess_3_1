import { HttpClient } from '@angular/common/http';
//import { HubConnection } from '@aspnet/signalr';
import { IUser } from '../../../Main/Member/Routes/User/User';
import { IProfile } from '../../../Main/Member/Views/Profile/Profile';

export class GM {
  static IsTest = true;
  static Test_EmailUserId = "DawnStick";
  static Test_Password = "1234";



  static IsAnonymous;
  static IsJustLoggedIn;
  static IsJustRegistered;
  static Area: string;
  static Role: string;
  static Hdr_NextY: number;
  static EmailUserId: string;
  static Email: string;
  static UserId: string;
  static Password: string;
  static Wiz: any;
  static AudioOn: boolean;

  static SaveByPass: boolean;
  static Delay: number;

  static Http: HttpClient;
  //static Hub: HubConnection;
  static URL: string;
  static Post: string;
  static Msg: string;
  static Inited: any = {};
  static Loaded: any = {};
  static Sized: any = {};
  static Data: any;

  static User: IUser;
  static Profile: IProfile;
}
export interface IGM {
  IsTest?: boolean;
  Test_EmailUserId?: string;
  Test_Password?: string;

  IsAnonymous?: boolean;
  IsJustLoggedIn?: boolean;
  Area?: string;
  Role?: string;
  Hdr_NextY: number;
  EmailUserId?: string;
  Email?: string;
  UserId?: string;
  Password?: string;
  Wiz?: any;
  AudioOn?: boolean;
  SaveByPass?: boolean;
  Delay?: number;
  Http?: HttpClient;
  //Hub?: HubConnection;
  URL?: string;
  Post?: string;
  Msg?: string;
  Inited?: any;
  Loaded?: any;
  Sized?: any;
  Data?: any;
  User?: IUser;
  Profile?: IProfile;
}

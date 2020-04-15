import { HttpParams, HttpHeaders } from '@angular/common/http';
import { GM } from '../../Main/Shared/Modules/Global';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

export class Web {

  public static Get(pSubscribe: any, pAction: string, pKey: string = null, pKey2: string = null) {
    //console.log("Web.Get * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pKey=" + pKey);
    //console.log("Web.Get * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pKey=" + pKey);
    GM.Http.get('/api/Web/Get', { params: new HttpParams().set('pAction', pAction).set('pKey', pKey).set('pKey2', pKey2) })
    //GM.Http.get(GM.URL + '/api/Web/Get', { params: new HttpParams().set('pAction', pAction).set('pKey', pKey).set('pKey2', pKey2) })
      .subscribe((Result: IResult) => pSubscribe({ Method: "Get", Action: pAction, Error: Result.Error, Data: Result.Data }),
        error => pSubscribe({ Method: "Get", Action: pAction, Error: error }));
  }
   
  public static Post(pSubscribe: any, pAction: string, pData: any) {
    //console.log("Web.Post * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pData=" + JSON.stringify(pData));
    GM.Http.post('/api/Web/Post/', { Action: pAction, Data: pData }, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .subscribe((Result: IResult) => pSubscribe({ Method: "Post", Action: pAction, Error: Result.Error, Data: Result.Data }),
        error => pSubscribe({ Method: "Post", Action: pAction, Error: error }));
  }
}
export enum EWeb { "Loading", "Server", "Done" }
export interface IParms { Action: string; Key: string; Key2: string; Data: string; }
export interface IResult {  Method: string,  Action: string,  Error?: string,  Data?: any}



import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

var webApihost="http://192.168.0.6:81/EBSWebApi/";
var scrollerid="ES00BACKUP/KHCApp_Items";
var scrid = "ES00BACKUP/KHCApp_Contacts";
@Injectable()
export  class LoginserviceProvider {

  url = webApihost +'api/login';

  //scroller code below//
  url2 = webApihost+"api/rpc/SimpleScrollerRootTable/" + scrollerid;

  //scrid code below
  url3 = webApihost+"api/rpc/SimpleScrollerRootTable/"+scrid;
  constructor(public http: HttpClient) {
    console.log('Hello LoginserviceProvider Provider');
    this.url=webApihost+'api/login';
    this.url2 = webApihost+"api/rpc/SimpleScrollerRootTable/" + scrollerid;
    this.url3 = webApihost+"api/rpc/SimpleScrollerRootTable/"+scrid;
  }

  getWebApi(url,params):Observable<HttpClient>{
    return this.http.post<HttpClient>
    (this.url,params);
  }
  getScrollerID(url,paramsScroller):Observable<HttpEvent<HttpClient>>{
    return this.http.get<HttpClient>
    (this.url2,paramsScroller);
  }
  getScrid(url,paramsScroller):Observable<HttpEvent<HttpClient>>{
    return this.http.get<HttpClient>
    (this.url3,paramsScroller);
  }
}



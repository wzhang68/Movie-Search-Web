import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of}from 'rxjs';
import { PlayingMV } from '../playingmv';
import { CurrplayingComponent } from './currplaying/currplaying.component';
import { delay, map, toArray } from 'rxjs/operators';
import { Key } from 'protractor';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})
export class MovService {

  tempsearch:any;

  constructor(private http: HttpClient) { }

  
  // MOVIES
  getPlayingMV(){
    // return this.http.get('http://localhost:9000/playingmv');
    // https://movie-web-571.wn.r.appspot.com/
    return this.http.get('https://movie-web-571.wn.r.appspot.com/playingmv');
  }
  getPopMV():Promise<any>{
    // return this.http.get('http://localhost:9000/popularmv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/popularmv').toPromise();
  }
  getTopMV():Promise<any>{
    // return this.http.get('http://localhost:9000/topratemv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/topratemv').toPromise();
  }
  getTendingMV():Promise<any>{
    // return this.http.get('http://localhost:9000/trendingmv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/trendingmv').toPromise();
  }

  // TVS
  getPopTV():Promise<any>{
    // return this.http.get('http://localhost:9000/populartv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/populartv').toPromise();
  }
  getTopTV():Promise<any>{
    // return this.http.get('http://localhost:9000/topratetv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/topratetv').toPromise();
  }
  getTendingTV():Promise<any>{
    // return this.http.get('http://localhost:9000/trendingtv').toPromise();
    return this.http.get('https://movie-web-571.wn.r.appspot.com/trendingtv').toPromise();
  }

  //Search Bar
  getSearch(keyword:string){
    // if(keyword!=null && keyword!=undefined && keyword!=""){
    //   return this.http.get<[any, string[]]>('http://localhost:9000/search/'+keyword).pipe(
    //     map(response => response["results"].filter(data => data.backdrop_path!=null).slice(0,7))
    //   );
    // }
    if(keyword!=null && keyword!=undefined && keyword!=""){
      return this.http.get<[any, string[]]>('https://movie-web-571.wn.r.appspot.com/search/'+keyword).pipe(
        map(response => response["results"].filter(data => data.backdrop_path!=null).slice(0,7))
      );
    }
  }



  getDeatil(tp:string,id:string){
    // return this.http.get('http://localhost:9000/watch/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/watch/'+tp+'/'+id);
  }

  getReviews(tp:string,id:string){
    // return this.http.get('http://localhost:9000/reviews/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/reviews/'+tp+'/'+id);

  }

  getYoutube(tp:string,id:string){
    // return this.http.get('http://localhost:9000/youtube/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/youtube/'+tp+'/'+id);
  }

  //Casts
  getFullCasts(tp:string,id:string){
    // return this.http.get('http://localhost:9000/cast/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/cast/'+tp+'/'+id);
  }

  getPerson(id:string){
    // return this.http.get('http://localhost:9000/findperson/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/findperson/'+id);
  }

  getExternal(id:string){
    // return this.http.get('http://localhost:9000/external/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/external/'+id);
  }
  
  getRecommend(tp:string,id:string){
    // return this.http.get('http://localhost:9000/recommend/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/recommend/'+tp+'/'+id);
  }
  
  getSimilar(tp:string,id:string){
    // return this.http.get('http://localhost:9000/similar/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/similar/'+tp+'/'+id);
  }



}

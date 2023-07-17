import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  private URL: string = 'https://crunchyroll-animes-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { 
    
  }
  
   //Método con la petición HTTP
   getResponse() {
    return this.http.get(this.URL);
  }

}

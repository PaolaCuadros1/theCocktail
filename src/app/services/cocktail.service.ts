import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCocktails() {
    return this.httpClient.get<any>(`${environment.S_CORE_SERVICE_API_BASE_URL}filter.php?c=Cocktail`);
  }

  getCocktailsByFirstLetter(letter: string) {
    return this.httpClient.get<any>(`${environment.S_CORE_SERVICE_API_BASE_URL}search.php?f=${letter}`);
  }
}

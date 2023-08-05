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

  getCocktailsByFirstLetter(letter: string, searchBy: string) {
    let by = searchBy == 'filter' ? 'i' : 'f'
    return this.httpClient.get<any>(`${environment.S_CORE_SERVICE_API_BASE_URL}${searchBy}.php?${by}=${letter}`);
  }

  getCocktailById(id: number) {
    return this.httpClient.get<any>(`${environment.S_CORE_SERVICE_API_BASE_URL}lookup.php?i=${id}`);
  }

  getIngredientByName(name: string) {
    return this.httpClient.get<any>(`${environment.S_CORE_SERVICE_API_BASE_URL}search.php?i=${name}`);
  }
}

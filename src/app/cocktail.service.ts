import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public getCocktails() : Cocktail[] { 
    return [
      {
        name : 'Cuba Libre',
        price : 9,
        image : 'https://assets.afcdn.com/recipe/20190222/88149_w1024h768c1cx2674cy1783cxt0cyt0cxb5346cyb3561.jpg'
      },
      {
        name : 'Mojito',
        price : 10,
        image : 'https://assets.afcdn.com/recipe/20180705/80255_w648h344c1cx2774cy1849cxt0cyt0cxb5541cyb3691.jpg'
      },
      {
        name : 'Pina Colalda',
        price : 7,
        image : 'https://assets.afcdn.com/recipe/20180605/79412_w800h600c1cx2000cy3000cxt0cyt0cxb4000cyb6000.jpg'
      }
    ]
  }
}

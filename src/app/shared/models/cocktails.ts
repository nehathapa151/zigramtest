export class Cocktail {
idDrink: string;
strDrink: string;
strCategory: string;
strAlcoholic: string;
strGlass: string;
strInstructions: string;
strDrinkThumb?: string;
strIngredient1?: string;
strIngredient2?: string;
strIngredient3?: string;
strIngredient4?: string;
strIngredient5?: string;
strIngredient6?: string;
strIngredient7?: string;
strMeasure1?: string;
strMeasure2?: string;
strMeasure3?: string;
strMeasure4?: string;
strMeasure5?: string;
strMeasure6?: string;
strMeasure7?: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    name = name;
    description = description;
    imagePath = imagePath;
    ingredients = ingredients;
  }
}

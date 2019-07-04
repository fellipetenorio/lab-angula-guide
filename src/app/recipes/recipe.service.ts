import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: "root" })
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: "Red Sauce",
      description: "Super Sauce!",
      imagePath:
        "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg"
    }
  ];

  getRecipes() {
    // return a copy of recipe
    return this.recipes.slice();
  }
}

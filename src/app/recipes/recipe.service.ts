import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: "Red Sauce",
      description: "Super Sauce!",
      imagePath:
        "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg",
      ingredients: [
        { name: "Apples asdf", amount: 77 },
        { name: "sdf", amount: 10 }
      ]
    }
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return a copy of recipe
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngridients(ingredients);
  }
}

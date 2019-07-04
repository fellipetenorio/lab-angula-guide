import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { LogService } from "../shared/log.service";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
    { name: "Apples", amount: 5 },
    { name: "Tomatos", amount: 3 }
  ];

  constructor(private log: LogService) {}

  getIngredients() {
    this.log.log(ShoppingListService.name, "getIngredients");
    // return a copy
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.log.log(ShoppingListService.name, "addIngredient");
    // checkupdate or insert
    const index = this.ingredients.findIndex(i => i.name === ingredient.name);
    if (index > -1) {
      this.ingredients[index] = ingredient;
    } else {
      this.ingredients.push(ingredient);
    }
    this.ingredientAdded.emit(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(i => i.name === ingredient.name);
    if (index >= -1) {
      this.log.log(
        ShoppingListService.name,
        "deleteIngredient: " + this.ingredients.splice(index, 1)
      );
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: "Apples", amount: 5 },
    { name: "Tomatos", amount: 3 }
  ];
  selectedIgredient: Ingredient;

  constructor() {}

  ngOnInit() {}

  onIgredientAdded(newIgrendient: Ingredient) {
    console.log("newIgrendient", newIgrendient);
    this.ingredients.push(newIgrendient);
  }

  onListItemSelected(item: Ingredient) {
    this.selectedIgredient = item;
  }
}

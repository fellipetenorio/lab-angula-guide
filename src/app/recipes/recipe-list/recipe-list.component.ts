import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: "Red Sauce",
      description: "Super Sauce!",
      imagePath:
        "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg"
    }
  ];

  constructor() {
    console.log(this.recipes);
  }

  ngOnInit() {}

  onRecipeSelected(recipe) {
    this.recipeSelected.emit(recipe);
  }
}

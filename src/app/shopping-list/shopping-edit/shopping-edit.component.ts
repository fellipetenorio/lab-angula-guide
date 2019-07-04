import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  Input
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { FormsModule } from "@angular/forms";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient: Ingredient;

  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient() {
    const newIgredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIgredient);
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.ingredient);
    this.onClearForm();
  }

  onClearForm() {
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }
}

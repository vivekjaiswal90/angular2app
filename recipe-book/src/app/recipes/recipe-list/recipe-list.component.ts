import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Vegan', 'Delicious', 'http://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg', []),
    new Recipe('Cake', 'Yummy and Choclaty', 'http://assets.goodhousekeeping.co.uk/main/galleries/17575/best-cake-recipes---celebration-cake---as-rated-by-the-ghi---food---goodhousekeeping-co-uk__large.jpg', []),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}

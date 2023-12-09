import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}

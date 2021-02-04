import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-drinkslist',
  templateUrl: './drinkslist.component.html',
  styleUrls: ['./drinkslist.component.css']
})
export class DrinkslistComponent implements OnInit {
  cocktails: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;

  constructor(
    public restApi: RestApiService
  ) {
    this.apiResponse = [];
  }

  ngOnInit() {
    this.restApi.getCocktailByName().subscribe((data: {}) => {
      this.apiResponse = data;
      this.cocktails = data;
    });
  }

  searchCocktail(searchStr: string) {
    clearTimeout(this.timer);
    let searchByapi;
    this.timer = setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.cocktails = this.apiResponse;
        return;
      }   
        this.restApi.getCocktailByName(searchStr).subscribe((data) => {
        this.noResult = false;
        if (data.drinks == null) {
          this.cocktails = [];
          this.noResult = true;
          return;
        }
        this.cocktails = data;
      });
    }, 250);
  } 

}

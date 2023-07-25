import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent {
  queryField = new FormControl()
  results$!: Observable<any>;
  readonly LINK = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  readonly FIELDS ='name'
  public search!: string


  constructor(private http: HttpClient){}

  ngOnInit(){
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.http.get(this.LINK, {
        params:{
          search: value,
          fields: this.FIELDS
        }
      })),
    )
  }

  onSearch(){
    const fields = 'name';
    let value = this.queryField.value;
    if(value && (value = value.trim()) != ''){

      const params_ = {
        search: value,
        fields: fields
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

      this.results$ = this.http
      .get(this.LINK, {params})


    }
  }


}

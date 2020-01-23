import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  @Input() index:number;
  constructor( private _heroesService:HeroesService,
               private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes );
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.index] );
  }
}

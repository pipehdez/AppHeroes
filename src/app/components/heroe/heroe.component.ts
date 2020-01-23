import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService, Heroe } from "src/app/services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:Heroe[] = [];
  dc = false;
  marvel = false;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) {
    activatedRoute.params.subscribe( params =>{
      // console.log(params['id']);
      this.heroe = this._heroesService.getHeroe( params['id'] );

    } )
  }

}

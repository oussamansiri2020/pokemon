import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  pokemon: any;

  constructor(private router: Router) { }

  onClick() {
    // Assuming 'pokemon' is the parameter you want to pass
    this.pokemon = (document.getElementById("searchTxt") as HTMLInputElement).value;
    const params =this.pokemon;

    ;

    // Use an object to define the route with parameters
    this.router.navigate(['/resultat'], { queryParams: { pokemon: params } });
  }
}
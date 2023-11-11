import { Component } from '@angular/core';
import { ResultatService } from '../services/resultat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {
  selectedPokemon: any;
  constructor(private Service: ResultatService,private route: ActivatedRoute) { }
  pokemonList: any[] = [];
  pokemon: any;
  imageUrl:any;
  ngOnInit() {
    document.documentElement.style.setProperty
    ('--wbColer', "red");
    this.route.queryParams.subscribe(params => {
      this.pokemon = params['pokemon'];
      this.getPokemonDetailsByName(this.pokemon)
    });
    //this.getPokemonList();
  }

  getPokemonList() {
    this.Service.getPokemonList().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
        console.log(this.pokemonList)
      },
      error => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }
  getPokemonDetails(id: number) {
    this.Service.getPokemonDetails(id).subscribe(
      (data: any) => {
        this.selectedPokemon = data;
      },
      error => {
        console.error('Error fetching Pokemon details:', error);
      }
    );
  }
  getPokemonDetailsByName(name: string) {
    this.Service.getPokemonDetailsByName(name).subscribe(
      (data: any) => {
        console.log(name);
        console.log(data);
        this.selectedPokemon = data;
      this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.selectedPokemon.id}.png`;
        console.log(this.selectedPokemon.types[0].type.name);
        switch (this.selectedPokemon.types[0].type.name) {
          case "grass":
            document.documentElement.style.setProperty
            ('--wbColer', "green");
              break;
          case "electric":
            document.documentElement.style.setProperty
            ('--wbColer', "yellow");
              break;
         
      }
      },
      error => {
        console.error('Error fetching Pokemon details:', error);
      }
    );
  }
}




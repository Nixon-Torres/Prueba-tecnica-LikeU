import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters: any;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe(
      resp => {
        this.characters = resp;
        console.log(this.characters);
      }
    )
  }

  nextCharacter(page: number) {
    
  }

}

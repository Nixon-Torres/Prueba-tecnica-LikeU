import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent implements OnInit {

  public characterParameter:any = {};
  public viewCharacters: any;
  public paramsId: any;
  public ViewInfoCharacter: any;

  constructor(private _actiivateRoute: ActivatedRoute, private characterService: CharactersService, private http: HttpClient) { 

    this._actiivateRoute.params.subscribe( params => {
      this.paramsId = params['id'];
      this.characterParameter = this.characterService.getViewCharacters( params['id'] );
      this.viewCharacters = `${this.characterService.apiUrl}/${this.paramsId}`;
    })

  }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.http.get(`${this.characterService.apiUrl}/${this.paramsId}`).subscribe(
      resp => {
        this.ViewInfoCharacter = resp;
        console.log("ENTRO A URL", this.ViewInfoCharacter)
      }
    )
  }

}

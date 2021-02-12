import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  isLoading: boolean;

  artists: any[] = [];

  constructor(private spotify: SpotifyService) {}
  
  buscar(termino: string){
    this.isLoading = true;

    // console.log(termino);
    this.spotify.getArtists(termino)
                .subscribe( (data: any) => {
                  // console.log(data);
                  this.artists = data;
                  this.isLoading = false;
                })
  }
    

}

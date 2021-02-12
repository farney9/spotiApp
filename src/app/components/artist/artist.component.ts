import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  isLoadingArtist: boolean;

  artista: any = {};
  topTracks: any = {};

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) { 

    this.isLoadingArtist = true;
    
    this.router.params.subscribe( parametros =>{

      this.router.params.subscribe(params =>{

        this.getArtista( params['id']);
        this.getTopTracksByArtist( params['id']);
      })
    })
  }

  getArtista( id: string){

    this.isLoadingArtist = true;

    this.spotify.getArtist( id )
                .subscribe( artista =>{
                  console.log(artista);
                  this.artista = artista;
                  this.isLoadingArtist = false;
                })
  }

  getTopTracksByArtist( id: string){

    this.isLoadingArtist = true;

    this.spotify.getTopTracksByArtist( id )
                .subscribe( topTracks =>{
                  console.log(topTracks);
                  this.topTracks = topTracks;
                  this.isLoadingArtist = false;
                })
  }


}

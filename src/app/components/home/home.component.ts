import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  isLoading : boolean;
  newTracks : any[] = [];
  errorOuput: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.isLoading = true;
    this.errorOuput = false;

    setTimeout(() => {
      
      this.spotify.getNewReleases()
          .subscribe( (data: any) => {
            // console.log(data);
            this.newTracks = data;
            this.isLoading = false;
          }, ( errorServicio ) => {
              
            this.isLoading = false;
            this.errorOuput = errorServicio
            this.mensajeError =  errorServicio.error.error.message;

            console.log(this.mensajeError);
          });
    }, 1000);

  }
}

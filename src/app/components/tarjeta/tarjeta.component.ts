import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  showArtist( item: any)  {
    
    let artistId;
    
    if (item.type === 'artist') {
      
      artistId = item.id;
    } else {
      artistId = item.artist[0].id;
    }
    
    // console.log(artistId);
    this.router.navigate(['/artist', artistId])
  }

}

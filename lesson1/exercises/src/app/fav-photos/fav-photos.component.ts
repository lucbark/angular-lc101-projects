import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Groovy Pics';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Comet_C2020_F3_%28NEOWISE%29_over_Split%2C_Croatia.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/7/78/GravityTap.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whiskyhogmanay2010.jpg/440px-Whiskyhogmanay2010.jpg';

  constructor() { }

  ngOnInit() {
  }

}
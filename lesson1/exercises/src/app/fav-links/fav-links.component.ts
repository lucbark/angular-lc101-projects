import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
favLinksTitle = 'My Favorite Links';
favLinks = ['https://en.wikipedia.org/wiki/Main_Page', 'https://dev.gutenberg.org/' ];
}

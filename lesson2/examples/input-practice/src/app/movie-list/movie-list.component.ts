import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
   let message = '';
      if(newTitle === ''){
         message = "You entered nothing."
         
      } else if(this.movies.includes(newTitle)){
         message = "Wow, it's sooo good you entered it twice."

      } else{
         this.movies.push(newTitle);
      }
return message
   }
}
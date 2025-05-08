import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Blog } from './app.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('ngOnOnit Called');
  }

  allBlogs: Blog[];
  foodBlogs: Blog[];

  constructor (
    private readonly appService: AppService
  ) {
    this.allBlogs = this.appService?.blogs;
    this.foodBlogs = this.appService?.foodBlogs;

    console.log('Constructored Called');
  }

  onLike() {
    console.log("Printing");
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../app.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})

export class BlogComponent {
  @Input({required: true}) blog!: Blog;
  @Output() onLikeEvent = new EventEmitter();

  blogLike(): void {
    this.onLikeEvent.emit();
  }
}

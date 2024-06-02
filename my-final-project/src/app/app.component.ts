import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './blog/post/post.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AboutComponent, BlogComponent, ContactComponent, PostComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-final-project';
}

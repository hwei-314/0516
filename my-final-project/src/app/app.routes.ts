import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path:'about', component:AboutComponent, title:'關於我們'},
  {path:'blog', component:BlogComponent, title:'最新公告'},
  {path:'contact', component:ContactComponent, title:'聯絡我們'},
];




import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TagsComponent, HomeComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component'; // 👈 Ajouter ceci

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TagsComponent, HomeComponent], // 👈 Ajouter HomeComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

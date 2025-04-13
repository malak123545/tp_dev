import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TagsComponent } from './tags/tags.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TagsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
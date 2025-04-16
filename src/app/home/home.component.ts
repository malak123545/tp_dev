import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from './note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showForm = false;
  note: Note = this.createEmptyNote();
  notes: Note[] = [];

  toggleForm() {
    this.showForm = true;
    this.note = this.createEmptyNote();
  }

  cancel() {
    this.showForm = false;
    this.note = this.createEmptyNote();
  }

  saveNote() {
    if (this.note.id === 0) {
      this.note.id = Date.now();
      this.notes.push(new Note(this.note.id, this.note.title, this.note.content, this.note.color));
    } else {
      const index = this.notes.findIndex(n => n.id === this.note.id);
      if (index !== -1) {
        this.notes[index] = new Note(this.note.id, this.note.title, this.note.content, this.note.color);
      }
    }
    this.cancel();
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
  }

  edit(note: Note) {
    this.note = new Note(note.id, note.title, note.content, note.color);
    this.showForm = true;
  }

  private createEmptyNote(): Note {
    return new Note(0, '', '', '#ffffff');
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../storage.service';

import { Tag } from '../tag/tag'; 
import { Note } from './note.model';
import { TagComponent } from '../tag/tag.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  notes: Note[] = [];
  editing: Note | null = null;
  tags: Tag[] = [];
  showForm: boolean = false;

  constructor(private storage: StorageService) {
    this.loadNotes();
    this.loadTags();
  }

  loadNotes() {
    this.notes = this.storage.loadNotes();
  }

  loadTags() {
    this.tags = this.storage.loadTags();
  }

  addNote() {
    this.editing = {
      id: 0,
      title: '',
      content: '',
      color: '#ffffff',
      checklist: false,
      checklistItems: [],
      tags: []
    };
    this.showForm = true;
  }

  cancelEditing() {
    this.editing = null;
    this.showForm = false;
  }

  saveNote() {
    if (!this.editing) return;
    if (this.editing.id === 0) {
      this.editing.id = Date.now();
      this.notes.push({ ...this.editing });
    } else {
      const index = this.notes.findIndex(n => n.id === this.editing!.id);
      if (index !== -1) {
        this.notes[index] = { ...this.editing };
      }
    }
    this.storage.saveNotes(this.notes);
    this.cancelEditing();
  }

  edit(note: Note) {
    this.editing = { ...note };
    this.showForm = true;
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
    this.storage.saveNotes(this.notes);
  }

  toggleTag(tagId: number) {
    if (!this.editing) return;
    const index = this.editing.tags.indexOf(tagId);
    if (index === -1) {
      this.editing.tags.push(tagId);
    } else {
      this.editing.tags.splice(index, 1);
    }
  }

  getTagName(tagId: number): string {
    const tag = this.tags.find(t => t.id === tagId);
    return tag ? tag.name : '';
  }

  getTagColor(tagId: number): string {
    const tag = this.tags.find(t => t.id === tagId);
    return tag ? tag.color : '#cccccc';
  }

  addChecklistItem(): void {
    if (this.editing && this.editing.checklist) {
      this.editing.checklistItems.push({ text: '', checked: false });
    }
  }

  // Méthode ajoutée pour enlever un élément de checklist
  removeChecklistItem(index: number): void {
    if (this.editing && this.editing.checklist) {
      this.editing.checklistItems.splice(index, 1);
    }
  }
}

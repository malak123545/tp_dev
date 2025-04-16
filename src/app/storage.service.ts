// src/app/storage.service.ts
import { Injectable } from '@angular/core';
import { Tag } from './tag/tag'; // ou un chemin adapté pour le modèle Tag
import { Note } from './home/note.model';


@Injectable({ providedIn: 'root' })
export class StorageService {
  saveTags(tags: Tag[]) {
    localStorage.setItem('tags', JSON.stringify(tags));
  }

  loadTags(): Tag[] {
    const data = localStorage.getItem('tags');
    return data ? JSON.parse(data) : [];
  }

  saveNotes(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  loadNotes(): Note[] {
    const data = localStorage.getItem('notes');
    return data ? JSON.parse(data) : [];
  }
}

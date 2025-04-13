import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StorageService } from '../storage.service';
import { TagComponent } from '../tag/tag.component';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: Tag[] = [];
  editing: Tag | null = null;

  constructor(private storage: StorageService) {
    this.loadTags();
  }

  loadTags() {
    this.tags = this.storage.load();
  }

  saveTag() {
    if (!this.editing) return;

    if (this.editing.id === 0) {
      this.editing.id = Date.now();
      this.tags.push({ ...this.editing });
    } else {
      const index = this.tags.findIndex(t => t.id === this.editing!.id);
      if (index !== -1) this.tags[index] = { ...this.editing };
    }

    this.storage.save(this.tags); // 💾 Sauvegarde après modification
    this.editing = null;
  }

  cancelEditing() {
    this.editing = null;
  }

  edit(tag: Tag) {
    this.editing = { ...tag };
  }

  deleteTag(tag: Tag) {
    this.tags = this.tags.filter(t => t.id !== tag.id);
    this.storage.save(this.tags); // 💾 Sauvegarde après suppression
  }
}

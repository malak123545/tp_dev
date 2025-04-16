
export interface Note {
  id: number;
  title: string;
  content: string;
  color: string;
  checklist: boolean;
  checklistItems: { text: string; checked: boolean }[];
  tags: number[]; 
}

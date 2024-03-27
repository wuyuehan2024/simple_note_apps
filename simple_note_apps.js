import { axiosConfig } from '@simple_note_apps/proxy';
import { sleep } from '@simple_note_apps/sleep';

// simple_note_app.js

class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class NoteApp {
    constructor() {
        this.notes = [];
    }

    addNote(title, content) {
        const note = new Note(title, content);
        this.notes.push(note);
    }

    editNoteTitle(index, newTitle) {
        this.notes[index].title = newTitle;
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
    }
}

// Example usage
const noteApp = new NoteApp();
noteApp.addNote('Shopping List', '1. Milk\n2. Bread\n3. Eggs');
noteApp.editNoteTitle(0, 'Grocery List');
noteApp.deleteNote(0);
console.log(noteApp.notes);

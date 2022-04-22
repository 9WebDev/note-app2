<template>
  <h1>Hello from Note!</h1>
  <NoteForm
    :notes="notes"
    @pushNote="addNote"
    @deleteAllNotes="clearAllNotes"
  />
  <NoteList v-show="notes.length" :notes="notes" @removeNote="clearNote" />
</template>

<script>
import NoteForm from "./NoteForm.vue";
import NoteList from "./NoteList.vue";

export default {
  data() {
    return {
      notes: [
        {
          id: 1,
          text: "Note example 1",
          createdDate: new Date().toLocaleString(),
        },
        {
          id: 2,
          text: "Note example 2",
          createdDate: new Date().toLocaleString(),
        },
        {
          id: 3,
          text: "Note example 3",
          createdDate: new Date().toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote(note) {
      this.notes.push(note);
    },
    clearAllNotes() {
      this.notes = [];
    },
    clearNote(note) {
      this.notes = this.notes.filter((noteItem) => noteItem.id !== note.id);
    },
  },
  components: {
    NoteForm,
    NoteList,
  },
};
</script>

<style scoped>
</style>
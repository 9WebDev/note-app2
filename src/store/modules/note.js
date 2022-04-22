export default {
    state: {
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
        ]
    },
    mutations: {
        addNote(note) {
            state.notes.push(note);
        },
        clearAllNotes() {
            state.notes = [];
        },
        clearNote(note) {
            state.notes = state.notes.filter((noteItem) => noteItem.id !== note.id);
        }
    },
    actions: {

    },
    getters: {
        getNotes(state) {
            return state.notes;
        }
    }
}
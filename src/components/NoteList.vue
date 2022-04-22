<template>
    <div class="note-list">
        <div class="container">
            <div class="card">
                <ul>
                    <!-- <li v-for="note in notes" :key="note.id" :title="note.createdDate">{{ note.text }}</li> -->
                    <NoteListItem v-for="note in notes" :key="note.id" :note="note" @removeNote="$emit('removeNote', note)"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import NoteListItem from './NoteListItem.vue';

export default {
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    components: {
        NoteListItem
    }
}
</script>

<style scoped>
.container {
    max-width: 600px;
}
.card {
    padding: 20px 50px;
}
ul {
    margin-bottom: 0;
    padding-left: 16px;
}
ul li {
    position: relative;
    margin-bottom: 10px;
    color: #7b8ab8;
}
ul li:last-child {
    margin-bottom: 0;
}
</style>
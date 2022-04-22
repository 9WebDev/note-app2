<template>
    <!-- <li>{{ note.text }}<button @click="() => hello(note.id)">&#215;</button></li> -->
    <li>- {{ note.text }}<ButtonUI @click="$emit('removeNote', note)">&#215;<font-awesome-icon icon="fa-solid fa-trash-can" /></ButtonUI></li>
</template>

<script>
export default {
    props: ["note"],
    methods: {
        // hello(id) {
        //     alert(id)
        // }
    }
}
</script>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 25px;
}
.btn {
    color: #7b8ab8;
    padding: 5px 16px;
    font-size: 1.4rem;
    line-height: 0.7;
}
.btn:hover {
    color: #ff6363;
}
</style>
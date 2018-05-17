<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">
                    <ion-icon name="person"></ion-icon>Author</th>
                <th scope="col">
                    <ion-icon name="calendar"></ion-icon>Date</th>
                <th scope="col">
                    <ion-icon name="chatbubbles"></ion-icon>Comment</th>
                <th scope="col">
                    <ion-icon name="flag"></ion-icon>Priority</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="note in notes">
                <td>{{ note.author }}</td>
                <td>{{ note.date }}</td>
                <td>{{ note.comment }}</td>
                <td v-bind:class="{
                'urgent': note.priority == 'Urgent',
                'high': note.priority == 'High',
                'normal': note.priority == 'Normal',
                'low': note.priority == 'Low',
                 }"

                >{{ note.priority }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            notes() {
                return this.$store.getters.notes
            }
        },
    }
</script>

<style>
    .urgent {
        color: #E64A19;
        font-weight: bold;
    }

    .high {
        color: #F57C00;
    }

    .normal {
        color: #FBC02D;
    }

    .low {
        color: #689F38;
    }

    ion-icon {
        vertical-align: middle;
        margin-bottom: 5px;
        margin-right: 3px;
    }

</style>
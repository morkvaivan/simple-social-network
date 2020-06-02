<template>
    <v-card class="my-2">
        <v-card-text>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
        <v-card-actions>
            <v-btn small text rounded value="Edit" @click="edit">Edit</v-btn>
            <v-btn small icon value="X" @click="del">
                <v-icon>{{ deleteIcon }}</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiDelete } from '@mdi/js'

    export default {
        props: ['message', 'editMessage', 'deleteMessage', 'messages'],
        data() {
            return {
                deleteIcon: mdiDelete
            }
        },
        methods: {
            edit() {
                this.editMessage(this.message);
            },
            del() {
                this.deleteMessage(this.message);
            }
        }
    }
</script>

<style>

</style>
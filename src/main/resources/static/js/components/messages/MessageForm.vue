<template>
    <v-layout>
        <v-text-field
                label="New message"
                placeholder="Write something"
                v-model="text"
        />
        <v-btn @click="save">
            Save
        </v-btn>
    </v-layout>
</template>

<script>
    import { sendMessage } from 'util/ws';
    import { getIndex } from 'util/collections';

    export default {
        props: ['messages', 'messageAttr'],
        data() {
            return {
                text: '',
                id: '',
            }
        },
        watch: {
            messageAttr(newValue, oldValue) {
                this.text = newValue.text;
                this.id = newValue.id;
            }
        },
        methods: {
            save() {
                sendMessage({ id: this.id, text: this.text });

                this.text = '';
                this.id = '';
            }
        }
    }
</script>

<style>

</style>
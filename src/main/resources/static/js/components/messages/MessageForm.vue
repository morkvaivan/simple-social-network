<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text" />
        <input type="button" value="Save" @click="save" />
    </div>
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
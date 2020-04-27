const messageApi = Vue.resource('/message{/id}');

Vue.component('message-row', {
  props: ['message'],
  template: '<div><i>({{ message.id }})</i> {{ message.text }}</div>'
});

Vue.component('messages-list', {
  props: ['messages'],
  template:
    '<div>' +
        '<message-row v-for="message in messages" :message=message v-bind:key="message.id" />' +
    '</div>',
  created: function () {
    messageApi.get().then(response => {
        response.json().then(data =>
            data.forEach(message => this.messages.push(message))
        );
    });
  }
});

const app = new Vue({
  el: '#app',
  template: '<messages-list :messages="messages" />',
  data: {
    messages: []
  }
});

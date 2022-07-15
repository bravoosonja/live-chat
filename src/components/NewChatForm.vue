<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const { user } = getUser();

    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      console.log(chat);
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  width: 60vw;
  margin-top: 1rem;
}

textarea {
  width: 100%;
  background-color: var(--color-background-muted);
  color: var(--color-heading);
  font-family: inherit;
  font-size: 16px;
  outline: 1px solid var(--color-border-hover);
  border-radius: 8px;
  padding: 1rem;
}
</style>
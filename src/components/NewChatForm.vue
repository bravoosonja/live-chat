<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">
      <p>{{ error }}</p>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");

    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  width: 60vw;
  /* margin-top: 1rem; */
}

textarea {
  width: 100%;
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  font-family: inherit;
  font-size: 16px;
  outline: 2px solid var(--color-border);
  border-radius: 8px;
  padding: 1.3rem;
  border: 0;
  box-sizing: border-box;
}
</style>
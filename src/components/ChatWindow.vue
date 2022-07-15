<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt.toDate() }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="messages">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
export default {
  setup() {
    const { error, documents } = getCollection("messages");
    return { error, documents };
  },
};
</script>

<style>
.chat-window {
  margin: 1rem 0;
  background-color: var(--color-background-mute);
  padding: 1rem;
  width: 100%;
  outline: 1px solid var(--color-border);
  border-radius: 8px;
}

.single {
  margin: 1rem 0;
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
}

.created-at {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
}

.name {
  color: var(--color-background);
  background: linear-gradient(220.55deg, #eaeaea 0%, #8b8b8b 100%);
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  margin-right: 1.5rem;
  font-weight: 700;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
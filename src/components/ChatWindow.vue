<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto-scroll to bottom of messages
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
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
  max-width: 60vw;
}

.single {
  margin: 1rem 0;
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
  position: relative;
  max-width: 60vw;
  display: flex;
  align-items: center;
}

.created-at {
  grid-area: "crated-at";
  font-size: 12px;
  position: absolute;
  right: 1rem;
  font-style: italic;
}

.name {
  grid-area: "name";
  color: var(--color-heading);
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  margin-right: 1.5rem;
  font-weight: 700;
}

.message {
  width: 38vw;
}

.messages {
  grid-area: "message";
  max-height: 60vh;
  max-width: 60vw;
  word-wrap: break-word;
  overflow: auto;
}
</style>
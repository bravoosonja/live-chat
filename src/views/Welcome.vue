<template>
  <div class="welcome">
    <span class="banner-text">CHAT</span>
    <div v-if="showLogin">
      <LoginForm />
    </div>
    <div v-else>
      <SignupForm />
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    return { showLogin };
  },
};
</script>

<style>
.welcome {
  display: flex;
  justify-self: center;
  align-items: center;
}
.welcome form {
  background-color: var(--color-background-mute);
  border-radius: 10px;
  padding: 2rem;
}

.welcome form > h2 {
  text-align: center;
}

.welcome input {
  background-color: var(--color-background-soft);
  font-size: 16px;
  padding: 0.5rem 1rem;
  display: block;
  width: 100%;
  margin: 15px auto;
  color: var(--color-text);
  outline: none;
  border: none;
}

.banner-text {
  font-weight: 700;
  font-size: 17rem;
  line-height: 1;
  margin-left: 0;
  margin-right: 3rem;
}
</style>
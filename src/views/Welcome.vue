<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <LoginForm />
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  components: { SignupForm, LoginForm },
};
</script>

<style>
.welcome {
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
}
.welcome form {
  background-color: var(--color-background-mute);
  border-radius: 10px;
  padding: 2rem;
}

.welcome input {
  background-color: var(--color-background-soft);
  font-size: 16px;
  padding: 0.5rem 1rem;
  display: block;
  width: 100%;
  margin: 10px auto;
  color: var(--color-text);
  outline: none;
  border: none;
}
</style>
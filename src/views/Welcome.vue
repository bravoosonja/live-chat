<template>
  <div class="welcome">
    <div class="left">
      <p class="banner-text">CHAT</p>
    </div>
    <div class="right">
      <div v-if="showLogin">
        <h1>Login</h1>
        <LoginForm @login="enterChat" />
        <p>
          No account yet?
          <span @click="showLogin = false"> Sign up </span>instead
        </p>
      </div>
      <div v-else>
        <h1>Sign up</h1>
        <SignupForm @signup="enterChat" />
        <p>
          Already registered?
          <span @click="showLogin = true"> Login </span>instead
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };
    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  background-color: var(--color-background-mute);
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right p {
  margin-top: 1rem;
  font-size: 14px;
}

.right span {
  cursor: pointer;
  background: linear-gradient(to right, rgb(79, 80, 80), rgba(79, 80, 80, 1)),
    linear-gradient(
      to right,
      rgb(247, 103, 156),
      rgba(250, 248, 129, 0.97),
      rgb(2, 251, 151),
      rgb(94, 150, 254),
      rgb(172, 117, 255)
    );
  background-size: 100% 3px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  font-weight: 700;
}

.right span:hover {
  background-size: 0 3px, 100% 3px;
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
  font-size: 18rem;
  line-height: 1;
  margin-left: 0;
  margin-right: 3rem;
}
</style>
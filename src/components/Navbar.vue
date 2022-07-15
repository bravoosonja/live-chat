<template>
  <nav>
    <div>
      <p>Hey there 👋 display name here</p>
      <p class="email">Currently logged in as 📧 email</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
export default {
  setup() {
    const { logout, error } = useLogout();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick };
  },
};
</script>

<style>
nav {
  padding: 2rem;
  outline: 2px solid var(--color-border);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  margin: auto;
}

nav p {
  margin: 2px auto;
  font-size: 18px;
  color: var(--color-text);
}

nav p.email {
  font-size: 14px;
  color: var(--color-text);
}
</style>
<template>
  <nav v-if="user">
    <div>
      <p>
        Hey there 👋 <span>{{ user.displayName }}</span>
      </p>
      <p class="email">Currently logged in as 📧 {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick, user };
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
  background-color: var(--color-background-soft);
}

nav p {
  margin: 2px auto;
  font-size: 18px;

  color: var(--color-heading);
}

nav span {
  font-weight: 700;
}

nav p.email {
  font-size: 14px;
  color: var(--color-text);
}

nav button {
  width: 150px;
  color: var(--color-heading);
}
</style>
<template>
  <nav v-if="user">
    <div>
      <p>
        Hey there 👋 <span>{{ user.displayName }}</span>
      </p>
      <p class="email">Currently logged in as 📧 {{ user.email }}</p>
    </div>
    <div class="buttons">
      <button @click="toggleDark()" id="toggle-theme">
        <img
          v-if="isDark"
          src="../assets/images/icon-sun.svg"
          alt="switch to light theme"
        />
        <img
          v-if="!isDark"
          src="../assets/images/icon-moon.svg"
          alt="switch to dark theme"
        />
      </button>

      <button @click="handleClick">Logout</button>
    </div>
  </nav>
</template>


<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

import { useDark, useToggle } from "@vueuse/core";

export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick, user, isDark, toggleDark };
  },
};
</script>


<style>
nav {
  padding: 1.3rem;
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
  color: var(--color-text);
}

nav span {
  font-weight: 700;
  color: var(--color-text);
}

nav p.email {
  font-size: 14px;
  color: var(--color-text);
}

nav button {
  width: 150px;
  color: var(--color-text);
}

#toggle-theme {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 10px;
  color: var(--color-text);
  box-shadow: none;
}

#toggle-theme::hover {
  background-color: transparent;
  color: var(--color-heading);
}
</style>
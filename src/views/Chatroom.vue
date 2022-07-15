<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div class="content container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #ffffff;
  padding: 20px;
}
</style>
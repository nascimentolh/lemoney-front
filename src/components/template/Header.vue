<template>
  <header class="header">
    <router-link to="/">
      <img
        src="https://d1lct8wjakcxob.cloudfront.net/assets/logos/logo-lemoney-3325db2b10a510c8ef9d1d30aab4be08d985a74e59ddc5ad7e17d2b19a0bf08d.svg"
        alt="Lemoney Challenge"
      />
    </router-link>

    <UserDropdown v-if="!hideUserDropdown" />
    <UserLogin v-else />
  </header>
</template>

<script>
import UserDropdown from "./UserDropDown";
import UserLogin from "./UserLogin";

export default {
  name: "Header",
  components: { UserDropdown, UserLogin },
  props: {
    title: String,
    hideUserDropdown: Boolean,
  },
};
</script>

<style>
.header {
  grid-area: header;
  background-color: #fff;
  border-bottom: 5px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: #fff;
  text-decoration: none;
}

.title a {
  color: #fff;
  text-decoration: none;
}

.title a:hover {
  color: #fff;
  text-decoration: none;
}

header > a > img {
  margin-left: 50px;
}
</style>
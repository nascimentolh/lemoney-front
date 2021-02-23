<template>
  <div class="user-login">
    <router-link to="/auth">
    <div class="user-button">
      <span class="d-none d-sm-block">Sign</span>
      <i class="fa fa-sign-in"></i>
    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "UserLogin",
};
</script>

<style>
.user-login {
  position: relative;

  height: 100%;
}

.user-button {
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
  text-decoration: none;
}

.user-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  text-decoration: none;
}
</style>
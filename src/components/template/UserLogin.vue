<template>
  <div class="user-login">
    <router-link to="/auth">
    <div class="user-button">
      <span class="d-none d-sm-block">Logar</span>
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
}

/* .user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}

.user-dropdown-content a:hover {
  background: #ededed;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
} */
</style>
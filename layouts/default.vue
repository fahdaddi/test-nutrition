<template>
  <div>
    <div class="navBar">
      <nuxt-link to="/">
        <img
          src="https://ci3.googleusercontent.com/proxy/QZhOaIHQB2ImJXmTEt8IE9qhkXzwD2FqNrDSrbT3sW2VfRLhbKnqEjlsikuFdnCmU6xAtYo0-YuKQuE=s0-d-e1-ft#https://www.nutriweb.mc/img/nutriweb.png"
        />
      </nuxt-link>
    </div>
    <div id="body">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.navBar {
  height: 60px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 0px 40px;
}
img {
  width: 100px;
  object-fit: contain;
}
#body {
  padding: 40px 40px;
}
</style>

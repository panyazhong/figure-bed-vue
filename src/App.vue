<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/index.scss";
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  // padding-bottom: 20px;
  min-height: calc(100vh - 60px);
  background: #efefef;
}
</style>

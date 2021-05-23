<!--
 * @Author: WannTonn
 * @Date: 2021-05-22 09:10:53
 * @LastEditTime: 2021-05-22 14:55:18
 * @LastEditors: WannTonn
 * @Description: 
 * @FilePath: /queryInput/src/App.vue
-->
<template>
  <div id="app">
      <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

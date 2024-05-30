<template>
  <div id="app">
    <nav>
      <router-link to="/">Characters List</router-link>
      <router-link to="/chart">Characters Chart</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <el-menu :router="true" mode="horizontal">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/vue">vue应用</el-menu-item>
        <el-menu-item index="/react">react应用</el-menu-item>
      </el-menu>
      <router-view></router-view>
      <div id="vue"></div>
      <div id="react"></div>
    </div>
  </div>
</template>

<style>

</style>

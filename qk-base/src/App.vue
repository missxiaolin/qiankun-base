<template>
  <div id="app">
    <div id="nav">
      <el-menu :router="true">
        <el-menu-item to="/">Home</el-menu-item>
        <el-menu-item to="/vue">vue应用</el-menu-item>
        <el-menu-item to="/react">react应用</el-menu-item>
      </el-menu>
      <router-view></router-view>
      <div id="vue"></div>
      <div id="react"></div>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>

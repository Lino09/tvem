<template>
<div class="app-container text-white">
  <header id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </header>
  <router-view class="z-10" />
  <div class="h-40 w-40 bg-red-500 backball top-2/3 left-1/2"></div>
  <div class="h-40 w-40 bg-pink-500 backball bottom-1/3 right-1/2"></div>
  <div class="h-40 w-40 bg-purple-500 backball top-28"></div>
  <div class="h-40 w-40 bg-indigo-500 backball top-1/3 left-3/4"></div>
  <div class="h-40 w-40 bg-yellow-500 backball top-1/4 left-24"></div>
  <div class="h-40 w-40 bg-green-500 backball top-2/3 left-16"></div>
</div>
</template>

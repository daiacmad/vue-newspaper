<template>
  <div>
    <Header />
	  <SideBar/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <footer class="main-footer">
      <Footer/>
    </footer>
  </div>
</template>

<script src="./main.component.js"></script>
<style src="./main.component.css"></style>

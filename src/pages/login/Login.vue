<template lang="pug">
  div.login-box
    div.login-logo
      a(href="../../index2.html")
        b Admin
        |  2T Newspaper
    div.login-box-body
      p.login-box-msg Sign in to start your session

      div.form-group.has-feedback
        input.form-control( 
          v-model="member.userName" 
          type="email" 
          placeholder="Email")

        span.glyphicon.glyphicon-envelope.form-control-feedback

      div.form-group.has-feedback
        input( 
          v-model="member.password" 
          type="password" 
          class="form-control" 
          placeholder="Password")

        span.glyphicon.glyphicon-lock.form-control-feedback

      button.btn.btn-primary.btn-block.btn-flat(
        type="button"  
        @click="onSignin()") Sign In
        
</template> 

<script src="./login.component.js"></script>
<style src="./login.component.css"></style>

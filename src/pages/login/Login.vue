<template lang="pug">
  div.login-box
    div.login-logo
      a(href="../../index2.html")
        b Admin
        |  2T Newspaper
    div.login-box-body
      p.login-box-msg Sign in to start your session
      div.callout(
        style="margin-top:20px;" 
        :class="{'callout-danger': message.status == 'error' , 'callout-success': message.status == 'success' }"
        v-show="message.display"
      )
        h4(v-show="message.status == 'error' ") Error!
        h4(v-show="message.status == 'success' ") Success!
        p {{message.text}}

      form(data-vv-scope="loginForm")
        div.form-group.has-feedback( :class="{'has-error': errors.has('loginForm.userName') && fields.$loginForm.userName.dirty }")
          input.form-control( 
            v-model="member.userName" 
            type="email" 
            name="userName"
            placeholder="Email"
            v-validate="{ required: true, email: true }"
            data-vv-as="user name"
            :disabled="loading")
          span.glyphicon.glyphicon-envelope.form-control-feedback
          span.text-danger(v-show="errors.has('loginForm.userName') && fields.$loginForm.userName.dirty ") {{errors.first("loginForm.userName")}}

        div.form-group.has-feedback( :class="{'has-error': errors.has('loginForm.password') && fields.$loginForm.password.dirty }")
          input.form-control( 
            v-model="member.password" 
            type="password" 
            name="password"
            placeholder="Password"
            v-validate="{required: true}"
            :disabled="loading")
          span.glyphicon.glyphicon-lock.form-control-feedback
          span.text-danger(v-show="errors.has('loginForm.password')  && fields.$loginForm.password.dirty") {{errors.first("loginForm.password")}}

        button.btn.btn-primary.btn-block.btn-flat(
          type="button"  
          @click="onSignin()"
          :disabled="errors.any('loginForm') || loading"
          ) Sign In
          i.fa.fa-refresh.fa-spin(
            v-show="loading"
            style="margin-left:5px"
          )


</template> 

<script src="./login.component.js"></script>
<style src="./login.component.css"></style>

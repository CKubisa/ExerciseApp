<template>
<div class="columns is-centered">
<div class="column is-half">
<form class="box">
  <form class="section" @submit.prevent="login()">
      <h1 class="title">
          Log In
        </h1>
      <div class="field">
            <input class="input" type="text" placeholder="Email" v-model="email">
        </div>
        <div class="field">
            <input class="input" type="password" placeholder="Password" v-model="password">
        </div>
        <div class="field">
            <button class="button is-success">
            Log in
            </button>
        </div>
  </form>
  </form>
  </div>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
  <div class="navbar-menu " :class="{'is-active': isActive }">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/" active-class="is-active" exact>
        Home
      </router-link>

      <router-link class="navbar-item" to="/history" active-class="is-active" exact>
        History
      </router-link>

      <router-link class="navbar-item" to="/exercise" active-class="is-active" exact>
        New Exercise
      </router-link>

      <router-link class="navbar-item" to="/report" active-class="is-active" exact>
        Report
      </router-link>

      <router-link class="navbar-item" to="/Feed" active-class="is-active" exact>
                      Activity
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Friends
                  </a>
          
                  <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/myfriends" active-class="is-active" exact>
                      My Friends
                    </router-link>
                    <router-link class="navbar-item" to="/findfriends" active-class="is-active" exact>
                      Find Friends
                    </router-link>
                  </div>
      </div>


      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link" >
          More
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/about" active-class="is-active">
            About
          </router-link>

          <router-link class="navbar-item" to="/contact" active-class="is-active">
            Contact
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <login-badge />
      </div>
    </div>
  </div>
</nav>
          
</template>

<script>
import LoginBadge from './LoginBadge';
export default {
    data(){
        return {
            isActive: false
        }
    },
    components: {
        LoginBadge,
    }
}
</script>

<style>
</style>
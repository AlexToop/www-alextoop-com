<template lang="html">
  <div id="app">
    <nav-bar :navbar-contents="navbarContents" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column" />
          <div class="column is-three-quarters">
            <div class="content">
              <div class="notification is-success">
                <!-- <button class="delete"></button> -->
                I'd really love people to check out <a href="https://reminds.alextoop.com" target="_blank">https://reminds.alextoop.com</a> - So please do!
              </div>
              <h2>Projects</h2>
              <project />
            </div>
          </div>
          <div class="column" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from './Navbar.vue'
import project from './Project.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': navbar,
    'project': project
  },
  data: function () {
    return {
      navbarContents: {
        links: [
          {
            name: 'Home',
            class: '',
            href: '/',
            icon: 'fa-home',
            iconColor: 'has-text-primary'
          },
          {
            name: 'Projects',
            class: 'is-active',
            href: '/projects/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: "Contact",
            class: "is-active",
            href: "/contact/",
            icon: "fa-info-circle",
            iconColor: "has-text-dark"
          }
        ],
        buttons: [
          {
            text: "NEW: Reminds Project",
            class: "is-info",
            href: "https://reminds.alextoop.com",
            isLogout: "false"
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

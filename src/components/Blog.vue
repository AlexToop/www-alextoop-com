<template lang="html">
  <div id="app">
    <nav-bar :navbar-contents="navbarContents" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column" />
          <div class="column is-three-quarters">
            <div class="columns">
              <div class="column">
                <div class="content">
                    <h2>Hello</h2>
                </div>
              </div>
              <div class="column">
                <div class="content">
                    <h2>
                        World!
                    </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="column" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import navbar from './Navbar.vue'
import heroBanner from './HeroBanner.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': navbar,
    'hero-banner': heroBanner
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
            name: 'Blog',
            class: 'is-active',
            href: '/blog/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: 'Projects',
            class: '',
            href: '/projects/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: 'Contact',
            class: '',
            href: '/contact/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          }
        ],
        buttons: [
          {
            text: 'Reminds Website',
            class: 'is-info',
            href: 'https://reminds.alextoop.com',
            isLogout: 'false'
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

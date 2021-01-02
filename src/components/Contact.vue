<template lang="html">
  <div id="app">
    <nav-bar :navbar-contents="navbarContents" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column" />
          <div class="column is-three-quarters">
            <div class="notification is-info">
              <!-- <button class="delete"></button> -->
              I prefer to be contacted through <a href="https://www.linkedin.com/in/alexandertoop/" target="_blank">LinkedIn</a> when possible
            </div>
            <div class="columns">
              <div class="column">
                <div class="content">

                <h2>Email</h2>
                <p>
                    <a href="mailto:alextoop@protonmail.com?subject=Enquiry">
                    alextoop@protonmail.com</a>
                </p>

                <h2>GitHub</h2>
                <p>
                    <a href="https://GitHub.com/AlexToop" target="_blank">github.com/AlexToop</a>
                </p>
                </div>
              </div>
              <div class="column">
                <div class="content">
                <h2>
                    LinkedIn
                </h2>

                <div class="LI-profile-badge linkedin-widget" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="alexandertoop">
                  <a class="LI-simple-link" href='https://uk.linkedin.com/in/alexandertoop?trk=profile-badge' target="_none">
                    Alexander Toop
                  </a>
                </div>
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
            name: 'Projects',
            class: '',
            href: '/projects/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: 'Contact',
            class: 'is-active',
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

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
                    <span v-html="content"></span>
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
import marked from 'marked'

export default {
  name: 'App',
  components: {
    'nav-bar': navbar
  },
  mounted: function () {
    const self = this
    fetch('/markdown/connascence.md')
      .then((response) => response.text().then(yourCallback));

    function yourCallback(retrievedText) {
      self.content = marked(retrievedText)
    }
  },
  data: function () {
    return {
      content: '',
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

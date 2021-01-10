<template>
  <div>
    <nav-bar :navbar-contents="navbarContents"></nav-bar>

    <!-- <hero-banner :title="'Alexander John Toop BEng'" :subtitle="'Software Engineer working on the BBC Sounds TV Application'"/> -->

    <section class="section">
      <div class="container">
          <div class="columns">
              <div class="column"></div>
              <div class="column is-three-quarters">
                <Nuxt />
              </div>
              <div class="column"></div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from '../components/Navbar'

export default {
  components: {
    'nav-bar': navbar
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
            class: '',
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

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  font-display: swap;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

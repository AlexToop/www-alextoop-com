<template lang="html">
  <div id="navbar">
    <nav
      class="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
          <div class="image is-32x32">
            <img src="/img/logo.jpg" class="is-rounded" alt="Reminds, a place to let tech do the remembering!">
          </div>
            <p class="has-padding-left"><b>Alex Toop</b></p>
          </a>

          <a
            role="button"
            class="navbar-burger burger custom-hamburger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="toggleMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link
              v-for="link in navbarContents.links"
              class="navbar-item"
              @click.native="toggleMenu"
              :key="link.name"
              :to="link.href || '#'">
              {{ link.name }}
            </nuxt-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  v-for="button in navbarContents.buttons"
                  class="button"
                  target="_blank"
                  rel="noopener"
                  :class="button.class"
                  :href="button.href"
                ><strong>{{ button.text }}</strong></a>

                <figure class="image is-48x48">
                  <img
                    class="is-rounded"
                    :src="imgUrl"
                  >
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['navbarContents', 'imgUrl'],
  data: function () {
    return {
      logoutInnerHtml:
        '<article class="message is-danger"><div class="message-body">Are you sure?</div></article>'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      document.addEventListener('logoutModalPositive', this.logout)
    })
  },
  methods: {
    toggleMenu: function () {
      document.querySelector('.navbar-burger').classList.toggle('is-active')
      document.querySelector('.navbar-menu').classList.toggle('is-active')
    }
  }
}
</script>

<style scoped>

a.navbar-item > .icon {
  margin-left: -0.25em;
  margin-right: 0.25em;
}

.nuxt-link-exact-active {
  color: #0a0a0a !important;
}

a:hover {
  color: #4a4a4a;
}

.nuxt-link-exact-active:not(:hover) {
  background-color: transparent;
}

.custom-hamburger {
  height: auto;
  width: 4.25rem;
}

.is-rounded {
  max-width: 48px;
  max-height: 48px;
}

.button {
  margin: auto 0;
}

.has-padding-left {
  padding-left: 0.7rem;
}
</style>

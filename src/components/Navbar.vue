<template lang="html">
  <div id="navbar">
    <nav
      class="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="/"
          >
          <div class="image is-32x32">
            <img src="/img/logo.png" class="is-rounded" alt="Reminds, a place to let tech do the remembering!">
          </div>
            <!-- <span class="icon is-large has-text-danger">
                <img src="/img/logo.png" class="is-rounded" alt="Reminds, a place to let tech do the remembering!">
            </span> -->
            <p class="has-padding-left"><b>Alex Toop</b></p>
          </a>

          <a
            role="button"
            class="navbar-burger burger custom-hamburger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
        >
          <div class="navbar-start">
            <a
              v-for="link in navbarContents.links"
              class="navbar-item"
              :href="link.href || '#'"
              :class="link.class"
            >
              {{ link.name }}
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  v-for="button in navbarContents.buttons"
                  class="button"
                  target="_blank"
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
import $ from 'jquery/dist/jquery.slim'
import 'bulma/css/bulma.min.css'

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
  methods: {}
}

$(document).ready(function () {
  $('.navbar-burger').click(function () {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })
})
</script>

<style scoped>
a.navbar-item > .icon {
  margin-left: -0.25em;
  margin-right: 0.25em;
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

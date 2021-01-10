<template lang="html">
  <div>
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
</template>

<script>
import heroBanner from '../components/HeroBanner.vue'

export default {
  name: 'App',
  components: {
    'hero-banner': heroBanner
  },
  head: {
    title: `Contact - Alexander ('Alex') Toop, Software Engineering Portfolio`,
    meta: [
      {
        name: 'Contact',
        content: 'Contact details and links related to me. Software Engineering portfolio website. Alexander Toop, previously employed by BT and studied at Aberystwyth University. Projects include Java, JavaScript, PHP, Angular and Node development.'
      }
    ],
    script: [
      {
        src: 'https://platform.linkedin.com/badges/js/profile.js'
      }
    ]
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

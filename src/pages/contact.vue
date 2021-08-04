<template lang="html">
  <div>
    <div class="notification is-info">
      <!-- <button class="delete"></button> -->
      I prefer to be contacted through <a href="https://www.linkedin.com/in/alexandertoop/" target="_blank" rel="noopener">LinkedIn</a> when possible
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="content">

        <h2>LinkedIn</h2>
        <p>
            Please contact me through <a href="https://www.linkedin.com/in/alexandertoop/" target="_blank">LinkedIn</a>. 
            </br>
            I may not respond to all queries.
        </p>

        <h2>GitHub</h2>
        <p>
            See my public projects on GitHub. 
            </br>
            <a href="https://GitHub.com/AlexToop" target="_blank">github.com/AlexToop</a>
        </p>
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
    ]
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

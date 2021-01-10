<template lang="html">
  <div class="content">
      <span v-html="content"></span>
  </div>         
</template>

<script>
import marked from 'marked'

export default {
  name: 'App',
  head: {
    title: `Blog - Alexander ('Alex') Toop, Software Engineering Portfolio`,
    meta: [
      {
        name: 'Blog',
        content: 'Blog posts written by me. Software Engineering portfolio website. Alexander Toop, previously employed by BT and studied at Aberystwyth University.'
      }
    ],
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
      content: ''
    }
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

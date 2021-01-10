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
    title: `Connascence - Alexander ('Alex') Toop, Software Engineering Portfolio`,
    meta: [
      {
        name: 'Connascence',
        content: 'Connascence. Software Engineering portfolio website. Alexander Toop, previously employed by BT and studied at Aberystwyth University.'
      }
    ],
  },
  layout: 'BlogPost',
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

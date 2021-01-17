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
    title: 'Connascence and software design - Alexander Toop',
    meta: [
      {
        name: 'Connascence',
        content: 'Connascence and software design. Software Engineering portfolio website. Alexander Toop, previously employed by BT and studied at Aberystwyth University.'
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

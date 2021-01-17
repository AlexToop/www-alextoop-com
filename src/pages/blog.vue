<template lang="html">
  <div class="content">
    <div class="notification is-warning">
      These only reflect my personal experience and research, they do not relate to the opinions of my employer
    </div>

    <h2>Blog Posts</h2>
    <article-preview v-for="blog in data" :title="blog.title" :date="blog.date" :body="blog.body" :link="blog.link" :key="blog.title"></article-preview>
  </div>         
</template>

<script>
import articlePreview from '../components/ArticlePreview.vue'
import data from '../assets/articles.model.js'

export default {
  name: 'App',
  components: {
    'article-preview': articlePreview
  },
  head: {
    title: `Blog posts - Alexander ('Alex') Toop`,
    meta: [
      {
        name: 'Blog',
        content: 'Blog posts about software engineering and software design practises. These posts relate to my personal experience and research.'
      }
    ],
  },
  data: function () {
    return {
      data: data.articles
    }
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

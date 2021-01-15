<template lang="html">
<div class="content">
  <h2>Latest Blog Post</h2>
  <article-preview v-for="blog in data" :title="blog.title" :date="blog.date" :body="blog.body" :link="blog.link" :key="blog.title" class="has-padding-bottom"></article-preview>

  <nuxt-link :to="'/blog/'">See more blog posts</nuxt-link>

  <div class="columns has-padding-top">
    <div class="column">
      
      <div>
        <h2>About Me</h2>
        <p>
            Software Engineer working on BBC Sounds TV. Currently supporting the development of new features and the rollout to our connected TV estate. 
            </br>
            </br>
            First Class Honours Software Engineering BEng.
            </br>
            </br>
            Ex-member of BBC TV Partner Expertience, working to automate the testing of new and existing connected TV devices. Ex-member of BT TSO developing an intelligent personalisted pre-sales system.
        </p>

        <h2>GitHub</h2>
        <div class="github-widget" data-username="alextoop"></div>
      </div>
    </div>
    <div class="column">
      <div class="content">
        <h2>Experience</h2>
        <ul>
            <li>Commercial, JavaScript and Java development and deployment.</li>
            <li>Commercial, AWS Serverless DevOps using infrastructure as code.</li>
            <li>Commercial, development testing with: JUnit, Jasmine, Puppeteer, Sinon, Mocha, Chai and Vue Test Utils.</li>
            <li>Personal, Fitbit development using JavaScript, Android App development using Java (with Espresso and general JUnit testing.)</li>
        </ul>

        <h2>History</h2>
        <ul>
            <li>BBC iPlayer and Sounds connected TV development. JavaScript and AWS DevOps.</li>
            <li>BT TSO (Technology, Services and Operations) Software Development. Java and Angular.</li>
            <li>First Class Honours Software Engineering BEng at Aberystwyth University.</li>
            <li>Achieved grades BBBD in Computing, Mathematics, General Studies and Physics at A-Level.</li>
        </ul>

        <h2>Hobbies</h2>
        <p>
            I enjoy developing in my spare time and currently doing Fitbit JavaScript
            development alongside node.js projects. See <nuxt-link :to="'/projects/'">'Projects'</nuxt-link>.
        </p>
        <p>
            I regularly swim with friends and enjoy long-distance running on occasion. Competitive esports gaming is
            one of my passions and I have attended and won events at LANs as a part of a team.
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import articlePreview from '../components/ArticlePreview.vue'
import data from '../assets/articles.model.js'

export default {
  name: 'App',
  head: {
    title: "Home - Alexander ('Alex') Toop, Software Engineering Portfolio",
    meta: [
      {
        name: 'Home',
        content: 'Software Engineering portfolio website. Alexander Toop, previously employed by BT and studied at Aberystwyth University. Projects include Java, JavaScript, PHP, Angular and Node development.'
      }
    ],
    script: [
      {
        src: 'https://npmcdn.com/github-card@1.2.0/dist/widget.js'
      }
    ]
  },
  layout: 'BannerShowing',
  beforeMount: function () {},
  mounted: function () {
    this.$nextTick(function () {})
  },
  components: {
    'article-preview': articlePreview
  },
  data: function () {
    return {
      data: [ data.articles[0] ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 1.7rem;
}

.has-padding-bottom {
  padding-bottom: 1rem;
}
</style>

<style>
.section {
  padding: 1rem 1rem;
}

.columns {
  padding-top: 0.7rem;
}

.column {
  padding: 1vw 0.75rem;
}
</style>

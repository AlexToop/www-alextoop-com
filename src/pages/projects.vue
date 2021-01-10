<template lang="html">
  <div class="content">
    <div class="notification is-warning">
      Productivity minded? Try out: <a href="https://reminds.alextoop.com" target="_blank">https://reminds.alextoop.com</a>
    </div>
    <h2>Projects</h2>
    <project v-for="project in data" :title="project.title" :date="project.date" :body="project.body" :imgUri="project.imgUri" :link="project.link" :key="project.title"/>
  </div>      
</template>

<script>
import project from '../components/Project.vue'
import data from '../assets/projects.model.js'

export default {
  name: 'App',
  components: {
    project: project
  },
  head: {
    title: "Projects - Alexander ('Alex') Toop, Software Engineering Portfolio",
    meta: [
      {
        name: 'Projects',
        content: "Projects that I've worked on. Alexander Toop, previously employed by BT and studied at Aberystwyth University. Projects include Java, JavaScript, PHP, Angular and Node development."
      }
    ],
  },
  data: function () {
    return {
      data: data.projects
    }
  }
}
</script>

<style scoped>
.has-padding-top {
  padding-top: 3rem;
}
</style>

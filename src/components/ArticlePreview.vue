<template lang="html">
  <div class="project">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{title}}</strong> <small>date:</small> <small>{{date}}</small>
                <br>
                {{body}}
              </p>
            </div>
            <small><nuxt-link :to="link">Read more</nuxt-link></small>
          </div>
        </article>
      </div>
      </br>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['title', 'date', 'body', 'link']
}
</script>

<style scoped>

</style>

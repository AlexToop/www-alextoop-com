<template lang="html">
  <div class="project">
      <div class="box">
        <article class="media">
          <nuxt-link :to="link">
          <div class="media-content">
            <div class="content">
              <p>
                <strong class="link">{{title}}</strong> <small>date:</small> <small>{{date}}</small>
                <br>
                {{body}}
              </p>
            </div>
          </div>
          </nuxt-link>
        </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['title', 'date', 'body', 'link']
}
</script>

<style scoped>
.media-content {
  color: #4a4a4a;
}

.link {
  color: #3273dc;
}
</style>

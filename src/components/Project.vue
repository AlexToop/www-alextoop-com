<template lang="html">
  <div class="project">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="imgUri" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{title}}</strong> <small>date:</small> <small>{{date}}</small>
                <br>
                {{body}}
              </p>
            </div>
            <small><a :href="link" target="_none">GitHub</a> · <a :href="link + '/issues'" target="_none">Issues</a></small>
          </div>
        </article>
      </div>
      </br>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['title', 'date', 'body', 'imgUri', 'link']
}
</script>

<style scoped>

</style>

<template lang="html">
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HeroBanner',
  props: ['title', 'subtitle']
}
</script>

<style scoped></style>

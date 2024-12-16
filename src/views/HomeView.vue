<template>
  <div class="home">
    <Header />
    <h1>Hey guys im the developer</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

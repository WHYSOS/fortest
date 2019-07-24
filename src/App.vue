<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['hello'])
  },
  methods: {
    ...mapMutations(['updateHello'])
    // ...mapActions(['outputHello'])

  },
  mounted () {
    // this.outputHello()
    // this.$store.dispatch('layout')
    // this.updateHello('world')
    // this.$store.commit('updateHello', 'world')
  }
}
</script>

<style>

</style>

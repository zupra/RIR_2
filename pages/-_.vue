<template lang="pug">
div
  pre {{$route.params}}
  pre {{$data}}
  h1 HELLO
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  validate({ router, store, params }) {
    // console.log('WTF', router)
    // console.log(Object.keys(store.state))
    // console.log(params)
    return Object.keys(store.state).some((city) => city === params.pathMatch)
    // return true
  },
  asyncData({ params }) {
    return params
  }
}
</script>

<style></style>

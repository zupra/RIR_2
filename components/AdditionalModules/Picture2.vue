<template lang="pug" functional>
svg(width="60" height="60" viewBox="0 0 60 60" fill="none"
  xmlns="http://www.w3.org/2000/svg")
  path(id="cleaning-streets" fill-rule="evenodd" clip-rule="evenodd"
    d="M27.75 14.1087C27.75 12.9432 28.6927 12.0004 29.8582 12.0004C31.0237 12.0004 31.9665 12.9432 31.9665 14.1087V27.6087H27.75V14.1087ZM36.7877 29.7192H22.9322C20.8712 29.7192 19.1162 31.2087 18.7742 33.2337H40.948C40.6037 31.2087 38.8487 29.7192 36.7877 29.7192ZM41.2725 35.3442H18.4462L16.5 48.0004H43.2188L41.2725 35.3442Z" fill="#CDCDCD")
</template>

<script>
export default {
  name: 'Picture2'
}
</script>

<style lang="stylus" scoped>
.bg_2:hover svg #cleaning-streets
  transition all 0.3s linear
  fill #2D71F7
  stroke transparent
</style>

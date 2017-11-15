<template lang="html">
  <b-col cols="12" sm="12" md="4">
    <div class="info-col">
        <i :class="icon"></i>
        <h3 class="info-title">
            {{ title }}
        </h3>
        <p class="info-desc">
            {{ description }}
        </p>
    </div>
  </b-col>
</template>

<script>
export default {
  props : ['title', 'icon', 'description']
}
</script>

<style lang="css">
</style>

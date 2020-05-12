<template>
  <div class="">
    <svg :class="svgClass">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
    className: {},
  },
  computed: {
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`
      } else {
        return 'svg-icon'
      }
    },
    iconName() {
      return `#icon-${this.className}`
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

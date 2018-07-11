<template>
  <v-stage :config="configKonva">
    <v-layer ref="layer">
      <card suit="heart" color="red" value="7" :redraw="redraw" />
    </v-layer>
  </v-stage>
</template>

<script>
import Card from 'components/objects/Card'

export default {
  components: {
    Card
  },
  name: 'Game',
  data () {
    return {
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      }
    }
  },
  computed: {
    redraw () {
      if (this.$refs.layer) {
        return this.$refs.layer.getStage().draw
      } else {
        return () => { console.log('failed redraw') }
      }
    }
  },
  mounted () {
    console.log(this.$refs)
  }
}
</script>

<style>

.game-div {
  width: 100%;
  height: 95vh;
}

</style>

<template>
  <v-group :config="configCard">
    <!-- <v-group :config="configFront">
      <v-rect :config="configRect" />
      <v-text :config="configText" />
      <v-text :config="configText2" />
      <v-group :config="configCenter">
        <div v-if="!Object.keys(imageValues).includes(value)">
          <v-text v-for="" :config="configCenterText" />
        </div>
        <v-image :config="configCenterImage" v-if="Object.keys(imageValues).includes(value)" />
      </v-group>
    </v-group>
    <v-group :config="configBack">
      <v-image />
    </v-group> -->
    <v-image :config="configFront" ref="cardFront" />
    <v-image :config="configBack" ref="cardBack" />
  </v-group>
</template>

<script>
// const cardSuits = {
//   heart: '♥',
//   diamond: '♦',
//   spade: '♠',
//   club: '♣',
//   star: '★'
// }

export default {
  name: 'Card',
  props: ['suit', 'color', 'value', 'redraw'],
  data () {
    return {
      // imageValues: {
      //   J: '',
      //   Q: '',
      //   K: '',
      //   W: ''
      // },
      valueConv: {
        'A': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10
      },
      frontImage: new Image(),
      backImage: new Image(),
      configCard: {
        x: 150,
        y: 150,
        draggable: true
      },
      configFront: {
        width: 140,
        height: 200
      },
      configBack: {
        visible: false,
        scaleX: 0
      }
      // configRect: {
      //   width: 140,
      //   height: 200,
      //   fill: '#fff',
      //   stroke: '#555',
      //   strokeWidth: 2,
      //   cornerRadius: 5
      // },
      // configText: {
      //   x: 3,
      //   y: 2,
      //   width: 25,
      //   height: 60,
      //   text: this.value + '\n' + cardSuits[this.suit],
      //   fontSize: 24,
      //   fontFamily: 'Calibri',
      //   fill: this.color,
      //   align: 'center'
      // },
      // configText2: {
      //   x: 137,
      //   y: 198,
      //   width: 25,
      //   height: 60,
      //   text: this.value + '\n' + cardSuits[this.suit],
      //   fontSize: 24,
      //   fontFamily: 'Calibri',
      //   fill: this.color,
      //   align: 'center',
      //   rotation: 180
      // },
      // configCenter: {
      //   offsetY: 50
      // },
      // configCenterText: {
      //   x: 20,
      //   y: 85,
      //   width: 100,
      //   height: 160,
      //   text: cardSuits[this.suit],
      //   fontSize: 36,
      //   fontFamily: 'Calibri',
      //   fill: this.color,
      //   align: 'center'
      // },
      // configCenterImage: {}
    }
  },
  mounted () {
    this.frontImage.src = require('../../statics/standard_cards/' + this.suit.toLowerCase().charAt(0) + '_' + this.value + '.png')
    this.frontImage.onload = () => {
      console.log('image loaded')
      this.$refs.cardFront.getStage().image(this.frontImage)
      this.$refs.cardFront.getStage().draw()
      // this.$refs.cardFront.image(this.frontImage)
    }
    // this.init()
  },
  // computed: {
  //   frontImage () {
  //     return require('../../statics/' + this.suit.toLowerCase() + '_' + this.value + '.png')
  //   },
  //   backImage () {
  //     return require('../../statics/cover.png')
  //   }
  // },
  methods: {
    init () {
      var frontImage = new Image()
      frontImage.src = this.frontImage
      frontImage.onload = () => {
        this.$refs.cardFront.setImage(frontImage)
      }
      var backImage = new Image()
      backImage.src = this.backImage
    }
    // symbolsArray (num) {
    //   switch (num) {
    //     case 1:
    //       return [{ x: 20, y: 85, width: 100, height: 160 }]
    //   }
    // }
  }
}
</script>

<style>
</style>

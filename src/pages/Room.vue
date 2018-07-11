<template>
  <q-page>
    <game />
  </q-page>
</template>

<script>
import Game from 'components/Game'

export default {
  components: {
    Game
  },
  name: 'Room',
  data () {
    return {
      id: this.$route.params.id,
      room: {}
    }
  },
  firebase () {
    return {
      roomState: {
        source: this.$firebase.roomState(this.$route.params.id),
        asObject: true
      }
    }
  },
  firestore () {
    return {
      room: this.$firebase.room(this.$route.params.id)
    }
  },
  watch: {
    'room.title': function (newTitle) {
      this.$root.$emit('room-title', newTitle)
    }
  },
  mounted () {
    this.enterRoom()
  },
  methods: {
    enterRoom () {
      this.$firebase.userRoomState(this.id).set(true)
      this.$firebase.userRoomState(this.id).onDisconnect().set(false)
    }
  }
}
</script>

<style>
</style>

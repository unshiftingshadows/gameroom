<template>
  <q-page padding>
    <!-- content -->
    <q-btn color="primary" @click.native="enterRoom('1')">Room 1</q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    enterRoom (roomid) {
      this.$router.push({ name: 'room', params: { id: roomid } })
    }
  }
}
</script>

<style>
</style>

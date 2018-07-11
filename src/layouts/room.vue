<template>
  <q-layout view="hHh Lpr lFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Footer -->
    <q-layout-footer style="max-height: 5vh;">
      <q-toolbar>
        <q-toolbar-title>
          The Game Room
          <span slot="subtitle">{{ roomTitle }}</span>
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="menu"
          right
          @click="rightDrawer = !rightDrawer"
        />
      </q-toolbar>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="right"
      v-model="rightDrawer"
      overlay
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
        <chat />
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Chat from 'components/Chat'

export default {
  components: {
    Chat
  },
  // name: 'LayoutName',
  data () {
    return {
      rightDrawer: true,
      roomTitle: ''
    }
  },
  mounted () {
    this.$root.$on('room-title', (newTitle) => {
      this.roomTitle = newTitle
    })
  }
}
</script>

<style>
</style>

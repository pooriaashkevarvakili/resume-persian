<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      style="padding: 15px"
      bordered
      class="bg-black text-white"
      height-hint="98"
    >
      <q-tabs align="right">
        <q-route-tab to="/resume" label="رزومه" />
        <q-route-tab to="/contact" label="ارتباط با من" />
        <q-route-tab to="/portfolio" label="نمونه کار" />
        <q-route-tab to="/experience" label="سابقه کار" />
        <q-route-tab to="/skills" label="مهارت" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal bordered class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <div>پورتفولیو پوریا اشکوروکیلی</div>
          <div class="q-mt-sm">&copy;2021-2022</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script setup>
</script>
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-3 px-3">
    <a class="navbar-brand" href="#">
      <img src="../assets/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      知乎专栏
    </a>
    <ul v-if="!userInfo.ifLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light" role="button" data-bs-toggle="button">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light" role="button" data-bs-toggle="button">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li><a href="#" class="btn btn-outline-light" role="button" data-bs-toggle="button">你好 {{userInfo.name}}</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface userInfoInterface {
  ifLogin: boolean,
  name?: string,
  id?: string
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    userInfo: {
      type: Object as PropType<userInfoInterface>,
      required: true
    }
  }
})
</script>

<style scoped>
.GlobalHeader {
}
</style>

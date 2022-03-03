<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-3 px-3">
    <a class="navbar-brand" href="#">
      <img src="../../assets/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      知乎专栏
    </a>
    <ul v-if="!userInfo.ifLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light" role="button" data-bs-toggle="button">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light" role="button" data-bs-toggle="button">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li><Dropdown :title="userInfo.name">
        <DropdownItem><a href="#" class="dropdown-item">新建文章</a></DropdownItem>
        <DropdownItem disabled><a href="#" class="dropdown-item">编辑资料</a></DropdownItem>
        <DropdownItem><a href="#" class="dropdown-item">退出登录</a></DropdownItem>
      </Dropdown></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from '@/components/home/Dropdown.vue'
import DropdownItem from '@/components/home/DropdownItem.vue'

export interface userInfoInterface {
  ifLogin: boolean,
  name?: string,
  id?: string
}

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
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

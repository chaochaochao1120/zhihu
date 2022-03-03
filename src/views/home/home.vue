<template>
  <div class="container">
    <GlobalHeader :userInfo="userInfo"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import ColumnList, { columnProp } from '@/components/home/ColumnList.vue'
import GlobalHeader, { userInfoInterface } from '@/components/home/GlobalHeader.vue'

const userInfo: userInfoInterface = {
  ifLogin: true,
  name: '张三'
}

const testData: columnProp[] = [
  {
    id: '1',
    title: 'test1的专栏',
    desc: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧.',
    img: require('../../assets/title-logo.png')
  },
  {
    id: '2',
    title: 'test2的专栏',
    desc: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧.',
    img: require('../../assets/title-logo.png')
  },
  {
    id: '3',
    title: 'test3的专栏',
    desc: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧.这是的test3专栏，有一段非常有意思的简介，可以更新一下欧.',
    img: require('../../assets/title-logo.png')
  },
  {
    id: '4',
    title: 'test4的专栏',
    desc: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧.'
    // img: require('../../assets/title-logo.png')
  }
]

export default defineComponent({
  name: 'home',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      userInfo: userInfo
    }
  }
})
</script>

<style scoped>
.home {
}
</style>

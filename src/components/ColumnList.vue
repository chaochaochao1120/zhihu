<template>
  <div class="row">
    <div class="col-4 mb-3" v-for="item in columnList" :key="item.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.img" :alt="item.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title fw-bold">{{ item.title }}</h5>
          <p class="card-text text-start">{{ item.desc }}</p>
          <a href="#" class="btn btn-outline-primary">进入专题</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface columnProp {
  id: string,
  title: string,
  desc: string,
  img?: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<columnProp[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map((item) => {
        if (!item.img) {
          item.img = require('../assets/default-img.png')
        }
        return item
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>
.ColumnList {
}
</style>

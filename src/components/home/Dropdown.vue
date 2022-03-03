<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="handleOpen">
      你好 {{ title }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" :style="{display: ifOpen}">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const ifOpen = ref('none')
    const dropdownRef = ref<null | HTMLElement>(null)

    const handleOpen = () => {
      if (ifOpen.value === 'none') {
        ifOpen.value = 'block'
      } else {
        ifOpen.value = 'none'
      }
    }

    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (ifOpen.value === 'block' && isClickOutside.value === 'block') {
        ifOpen.value = 'none'
      }
    })

    return {
      ifOpen,
      dropdownRef,
      handleOpen
    }
  }
})
</script>

<style scoped>
.Dropdown {
}
</style>

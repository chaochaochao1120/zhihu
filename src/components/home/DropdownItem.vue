<template>
  <li
    class="dropdown-option"
    :class="{'if-disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.if-disabled * {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}
</style>

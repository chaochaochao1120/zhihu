import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref('none')
  const handleClick = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = 'none'
      } else {
        isClickOutside.value = 'block'
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handleClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })

  return isClickOutside
}

export default useClickOutside

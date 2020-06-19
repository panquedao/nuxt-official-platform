<template>
  <div class="my-6 overflow-hidden" :style="{ 'width': width }">
    <div class="max-w-sm rounded shadow-lg border border-solid border-gray-300">
      <div class="relative overflow-hidden">
        <slot></slot>
        <div class="px-6 py-4 hover:opacity-100 hover-mask_actions absolute w-full h-full top-0 left-0 cursor-pointer text-gray-200 opacity-0">
            <slot name="action"></slot>
        </div>
      </div>
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverMask',
  props: {
    width: {
      type: [String],
      default: `385px`
    }
  }
}
</script>

<style scoped>
.hover-mask_actions {
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
</style>
<script setup lang="ts" name="Card">
import { ref } from 'vue'

const element = ref<HTMLElement | null>(null)
const multiple = 20 // 数值越小 偏移量对大
function mouseMove(e: MouseEvent) {
  requestAnimationFrame(() => {
    transformElement(e.clientX, e.clientY)
  })
}

function transformElement(x: number, y: number) {
  let box = element.value!.getBoundingClientRect()
  let calcX = -(y - box.y - box.height / 2) / multiple
  let calcY = (x - box.x - box.width / 2) / multiple
  element.value!.style.transform = 'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)'
}

function mouseLeave() {
  requestAnimationFrame(() => {
    element.value!.style.transform = 'rotateX(0) rotateY(0)'
  })
}
</script>

<template>
  <div id="card-3d" @mousemove="mouseMove" @mouseleave="mouseLeave">
    <div ref="element">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
#card-3d {
  width: fit-content;
  height: fit-content;
  transform-style: preserve-3d;
  perspective: 500px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0; */

  & > div {
    width: fit-content;
    height: fit-content;
    margin: auto;
    /* border-radius: 10px; */
    /* border: 1px solid var(color-scheme); */
    transform-style: preserve-3d;
    transform: rotateX(15deg) rotateY(30deg);
    transition: all 0.2s;
  }
}
</style>

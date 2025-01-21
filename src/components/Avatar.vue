<script setup lang="ts">
type TAvatarProps = {
  src?: string,
};

const props = defineProps<TAvatarProps>();
</script>

<template>
  <div class="avatar">
    <img v-if="props.src" class="avatar__img" :src="props.src"/>
    <img v-else src="../assets/1.png" class="avatar__img"/>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
}

.avatar__img {
  width: 100%;
  height: 100%;
}
</style>

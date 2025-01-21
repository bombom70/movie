<script setup lang="ts">
type TAliasItemProps = {
  alias: string
};

const props = defineProps<TAliasItemProps>();
</script>

<template>
  <div class="alias-item">
    {{ props.alias }}
    <img class="alias-item__close-icon" src="@/assets/close.svg"/>
  </div>
</template>

<style scoped lang="scss">
.alias-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: lightslategray;
  color: whitesmoke;
  border-radius: 4px;

  &__close-icon {
    width: 10px;
    height: 10px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>

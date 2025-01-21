<script setup lang="ts">
import { type TResponseData } from '@/network/network.ts';
import Avatar from './Avatar.vue';

type TSuggestItemProps = {
  suggest: TResponseData,
};

const props = defineProps<TSuggestItemProps>();
const name = props.suggest.name ? props.suggest.name : props.suggest.alias;
</script>

<template>
  <div class="suggest-item">
    <Avatar :src="props.suggest.avatar" />
    <div>
      <p>
        {{ name }}
      </p>
      <p  class="suggest-item__alias" v-if="props.suggest.type === 'user'">
        @{{ props.suggest.alias }}
      </p>
      <p v-if="props.suggest.type === 'company'">
        Компания
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.suggest-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: #fff;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: lightgray;
  }

  &__alias {
    color: gray;
  }
}
</style>

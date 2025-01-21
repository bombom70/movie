<script setup lang="ts">
import { computed } from 'vue';
import SuggestItem from './SuggestItem.vue';
import { type TResponseData } from '@/network/network.ts';
import { STATUS_LOADING } from '@/shared/general.ts';

type TSuggestListProps = {
  suggests: Array<TResponseData>,
  isOpen: boolean,
  showElements: number,
  isLoading: STATUS_LOADING,
  errorMessage: string,
};

const props = defineProps<TSuggestListProps>();
const isEmptyData = computed(() => !props.suggests.length && props.isLoading === STATUS_LOADING.FULFILED);
const emit = defineEmits(['addAlias']);
</script>

<template>
  <div class="suggest-list" :class="{ 'suggest-list--open': props.isOpen }">
    <div
      class="suggest-list__wrapper"
      :class="{ 'suggest-list__wrapper--empty': isEmptyData || props.isLoading !== STATUS_LOADING.FULFILED }"
      :style="{ height: `${props.showElements * 60 }px`}"
    >
      <div v-if="isEmptyData">
        Данные отсутствуют
      </div>
      <div v-else-if="props.isLoading === STATUS_LOADING.PENDING">Загрузка...</div>
      <div v-else-if="props.isLoading === STATUS_LOADING.FAILED">{{ props.errorMessage }}</div>
      <div v-else>
        <SuggestItem
          v-for="suggest in props.suggests"
          :key="suggest.name"
          :suggest="suggest"
          @click="emit('addAlias', suggest.alias)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.suggest-list {
  display: none;
  // max-width: 340px;
  border: 1px solid lightgray;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  box-sizing: border-box;

  &__wrapper {
    overflow-x: hidden;
    overflow-y: auto;

    &--empty {
      text-align: center;
      padding-top: 20px;
      height: 40px !important;
    }
  }

  &--open {
    display: block !important;
  }
}

</style>

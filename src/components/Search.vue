<script setup lang="ts">
import { toRef } from 'vue';
import AliasList from './AliasList.vue';
import { debounce } from '@/shared/debounce.ts';

type TSearchProps = {
  aliases: Set<string>
};

const props = defineProps<TSearchProps>();
const aliasesRef = toRef(props.aliases);

const searchValue = defineModel();
const onChange = debounce((event: Event) => {
  const value = (event.target as HTMLInputElement).value.trim();
  searchValue.value = value;
}, 500);
const removeAlias = (alias: string) => {
  aliasesRef.value.delete(alias);
}
</script>

<template>
  <div class="search">
    Введите имя пользователя или компанию
    <div class="search__wrapper" :class="{ 'search__wrapper--active': searchValue }">
      <AliasList
        v-if="props.aliases.size"
        :aliases="props.aliases"
        @remove-alias="removeAlias"
      />
      <input
        class="search__input"
        placeholder="Введите имя пользователя или компанию"
        :value="searchValue"
        @input="onChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search__wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;

  &--active {
    border-radius: 8px 8px 0 0;
    border-bottom: none;
  }
}
.search__input {
  width: 100%;
  min-width: 300px;
  border: none;
  outline: none;
}
</style>

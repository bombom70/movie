<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import axios, { AxiosError } from "axios";
import Search from './components/Search.vue';
import SuggestList from './components/SuggestList.vue';
import { fetchSuggests, type TResponseData } from './network/network.ts';
import { STATUS_LOADING } from '@/shared/general.ts';

const inputValue = ref('');
const suggests = ref<Array<TResponseData>>([]);
const errorMessage = ref('');

// Колличетсво элементов в выпадающем списке
const MAX_SHOW_ELEMENTS = 4;
// Колличетсво элементов в инпуте
const MAX_ALIAS_ELEMENTS = 4;

const isLoading = ref(STATUS_LOADING.FULFILED);

const getSuggests = async () => {
  try {
    isLoading.value = STATUS_LOADING.PENDING;
    errorMessage.value = '';
    const res = await fetchSuggests(inputValue.value);
    suggests.value = res;
    isLoading.value = STATUS_LOADING.FULFILED;
  } catch (error: unknown | AxiosError) {
    isLoading.value = STATUS_LOADING.FAILED;
    if (axios.isAxiosError(error))  {
      errorMessage.value = error.response?.data.message;
    } 
    // провека на кастомную 500 ошибку
    else {
      errorMessage.value = String(error);
    }
  }
};

const aliases = reactive<Set<string>>(new Set());

const addAlias = (alias: string) => {
  if (aliases.has(alias) || MAX_ALIAS_ELEMENTS <= aliases.size) return;
  aliases.add(alias);
}

watch(inputValue, () => {
  if (!inputValue.value)return;
  getSuggests();
});
</script>

<template>
  <div class="container">
    <Search
      v-model="inputValue"
      :aliases="aliases"
    />
    <SuggestList
      :suggests="suggests"
      :is-open="!!inputValue.length"
      :show-elements="MAX_SHOW_ELEMENTS"
      :is-loading="isLoading"
      :error-message="errorMessage"
      @add-alias="addAlias"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>

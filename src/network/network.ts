import axios from "axios";

type TTypeOfResponseEntity = 'user' | 'company';

export type TResponseData = {
  type: TTypeOfResponseEntity,
  alias: string,
  name: string,
  avatar: string,
};

type TResponse = {
  data: Array<TResponseData>
};

export const fetchSuggests = async (
  name: string,
): Promise<Array<TResponseData>> => {
  try {
    const response = (
      await axios.get<TResponse>(
        'https://habr.com/kek/v2/publication/suggest-mention?',
        { params: { q: name } }
      )
    );
    // Эмулирование 500 ошибки
    // throw new Error('Ошибка на сервере! Status: 500');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
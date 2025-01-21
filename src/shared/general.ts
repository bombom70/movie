/**
 * Статусы загрузки:
 * PENDING - Идет запрос.
 * FULFILED - Загрузка завершилась успешно.
 * FAILED - Загрузка завершилась с ошибкой.
 */
export enum STATUS_LOADING {
  PENDING = "PENDING",
  FULFILED = "FULFILED",
  FAILED = "FAILED",
};
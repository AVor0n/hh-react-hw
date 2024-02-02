/** Настройки приложения */
export interface Settings {
  /** Логин пользователя */
  login: string;
  /** Название репозитория */
  repo: string;
  /** Черный список для логинов */
  blacklist: string[];
}

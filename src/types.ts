/** Настройки приложения */
export interface Settings {
  /** Логин пользователя */
  login: string;
  /** Название репозитория */
  repo: string;
  /** Черный список для логинов */
  blacklist: string[];
}

export interface User {
  /** Логин пользователя */
  login?: string;
  /** Ссылка на github-профиль */
  url?: string;
  /* Ссылка на аватар пользователя */
  avatarUrl?: string;
}

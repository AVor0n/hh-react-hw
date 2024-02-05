export class LocaleStorage {
  static get<T>(key: string) {
    try {
      const value = localStorage.getItem(key) || '';
      return (JSON.parse(value) as T) || null;
    } catch (e) {
      return null;
    }
  }

  static set<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      localStorage.clear();
    }
  }
}

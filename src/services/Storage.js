class Storage {
  static saveResults(key, value) {
    Storage.setItem(key, value);
  }

  static setItem(key, value) {
    const item = window.localStorage.getItem(key);
    if (!item) {
      window.localStorage.setItem(key, value);
    }

    const record = JSON.parse(item);

    if (value >= record) {
      window.localStorage.removeItem(key);
      window.localStorage.setItem(key, value);
    }
  }

  static getItem(key) {
    const item = window.localStorage.getItem(key);

    if (!item) {
      return 0;
    }

    return JSON.parse(item);
  }
}

export default Storage;

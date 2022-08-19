export function storeCurrentData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getCurrentData(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

export function clearCurrentData() {
  localStorage.clear();
}

export function clearCurrentItem(key) {
  localStorage.removeItem(key);
}

export function getImage(path) {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
}

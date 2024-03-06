export function getImageUrl(name, ext) {
    return new URL(`../../../public/images/${name}.${ext}`, import.meta.url).href;
}

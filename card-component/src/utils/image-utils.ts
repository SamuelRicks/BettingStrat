function getImageUrl(name: string, id: string): string {
  return new URL(`../../public/nba_photos/${name}/${id}.png`, import.meta.url)
    .href;
}

export { getImageUrl };

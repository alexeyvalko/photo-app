import type { PhotoBasic } from '@/types/photos';

export const columnsCounter = (columns: number) => {
  let counter = 0;
  return () => {
    if (counter !== columns) {
      counter++;
      return counter;
    } else {
      counter = 1;
      return counter;
    }
  };
};

export const filterPhotosByColumn = (
  photos: PhotoBasic[],
  totalColumns: number,
  column: number,
) => {
  const count = columnsCounter(totalColumns);
  return photos.filter(() => count() === column);
};

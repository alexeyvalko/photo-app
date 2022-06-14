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

export const filterPhotosByColumn = (photos: PhotoBasic[], column: number) => {
  const count = columnsCounter(3);
  return photos.filter(() => count() === column);
};

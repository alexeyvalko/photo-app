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

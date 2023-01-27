export const setListStorage = (list: string) => {
  localStorage.setItem('list-data', list);
};

export const getListStorage = () => {
  return localStorage.getItem('list-data');
};

export const deleteListStorage = () => {
  localStorage.removeItem('list-data');
};

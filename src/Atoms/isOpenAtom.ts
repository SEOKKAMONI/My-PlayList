import { atom } from 'recoil';

export const isOpenModalAtom = atom<boolean>({
  key: 'isOpenModal',
  default: false,
});

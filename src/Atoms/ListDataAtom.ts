import { atom } from 'recoil';

export const isUrlAtom = atom<string[] | null>({
  key: 'isUrls',
  default: null,
});

export const isTitleAtom = atom<string[] | null>({
  key: 'isTitles',
  default: null,
});

export const isExplainAtom = atom<string[] | null>({
  key: 'isExplains',
  default: null,
});

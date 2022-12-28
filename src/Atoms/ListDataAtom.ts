import { atom } from 'recoil';

export const isUrlAtom = atom<string[] | null>({
  key: 'isUrl',
  default: null,
});

export const isTitleAtom = atom<string[] | null>({
  key: 'isTitle',
  default: null,
});

export const isExplainAtom = atom<string[] | null>({
  key: 'isExplain',
  default: null,
});

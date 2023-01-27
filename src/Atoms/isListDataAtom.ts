import { atom } from 'recoil';
import { PlayListType } from 'type/list.type';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem('list-data');
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
  };

export const playListsAtom = atom<PlayListType[]>({
  key: 'lists',
  // 임의 데이터
  default: [],
  effects_UNSTABLE: [localStorageEffect('list-data')],
});

import { atom } from 'recoil';
import { getListStorage } from 'shared/storage/storage';
import { PlayListType } from 'type/list.type';

const localStorageEffect =
  (key: string) =>
  ({ setSelf }: any) => {
    const savedValue = getListStorage();
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
  };

export const playListsAtom = atom<PlayListType[]>({
  key: 'lists',
  // 임의 데이터
  default: [],
  effects: [localStorageEffect('list-data')],
});

export const playListAtom = atom<PlayListType>({
  key: 'list',
  // 임의 데이터
  default: {
    title: '',
    url: '',
    explain: '',
    name: '',
  },
});

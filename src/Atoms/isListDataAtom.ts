import { atom } from 'recoil';
import { getListStorage } from 'shared/storage/storage';
import { PlayListType } from 'type/list.type';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = getListStorage();
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet(({ newValue, _ }: any, isReset: boolean) =>
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue)),
    );
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
    id: 0,
    title: '',
    url: '',
    explain: '',
    name: '',
  },
});

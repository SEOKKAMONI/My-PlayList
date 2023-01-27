import { atom } from 'recoil';
import { PlayListType } from 'type/list.type';

export const playList = atom<PlayListType[]>({
  key: 'list',
  // 임의 데이터
  default: [],
});

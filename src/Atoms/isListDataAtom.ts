import { atom } from 'recoil';

export interface ListDataTypes {
  title: string;
  url: string;
  explain: string;
  name: string;
}

export const isListData = atom<ListDataTypes[]>({
  key: 'list',
  // 임의 데이터
  default: [],
});

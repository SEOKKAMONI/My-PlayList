import { atom } from 'recoil';
import { ItemDataType } from 'type/list.type';

export const isListData = atom<ItemDataType[]>({
  key: 'list',
  // 임의 데이터
  default: [],
});

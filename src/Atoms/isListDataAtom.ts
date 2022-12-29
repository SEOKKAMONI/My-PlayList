import { atom } from 'recoil';

export interface ListDataTypes {
  title: string;
  url: string;
  explain: string;
  name: string;
}

export const isTitleState = atom<string>({
  key: 'isTitleState',
  default: '',
});

export const isUrlState = atom<string>({
  key: 'isUrlState',
  default: '',
});

export const isExplainState = atom<string>({
  key: 'isExplainState',
  default: '',
});

export const isListData = atom<ListDataTypes[]>({
  key: 'list',
  // 임의 데이터
  default: [
    {
      title: '지친 당신을 위한 새벽 플레이리스트',
      url: 'https://www.youtube.com/watch?v=-1jSZwUsdco',
      explain:
        '이것은 설명입니다 이것은 설명입니다 이것은 설명입니다 이것은 설명입니다 이것은 설명입니다 이것은 설명입니다',
      name: '김석진',
    },
  ],
});

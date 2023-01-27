import React from 'react';
import { useRecoilState } from 'recoil';
import { PlayListType } from 'type/list.type';
import { playListsAtom } from 'Atoms/isListDataAtom';
import * as S from './style';

export default function PlayList({
  id,
  title,
  explain,
  url,
  name,
}: PlayListType) {
  const [playLists, setPlayLists] =
    useRecoilState<PlayListType[]>(playListsAtom);
  let replaceUrl: string;
  let finUrl: string[];

  const ExportThumnail = (youtubeUrl: string) => {
    replaceUrl = youtubeUrl.replace('https://youtu.be/', '');
    replaceUrl = youtubeUrl.replace('https://www.youtube.com/embed/', '');
    replaceUrl = youtubeUrl.replace('https://www.youtube.com/watch?v=', '');
    finUrl = replaceUrl.split('&');
    return finUrl[0];
  };

  const Delete = (id: number) => {
    // filter를 이용해 삭제 기능을 구현했다.
    setPlayLists((playLists) =>
      playLists.filter((playList: PlayListType) => playList.id !== id),
    );
  };

  return (
    <S.PlayList>
      <S.ImgBox>
        <S.Link href={url} target="_blank">
          <S.Shortcut>바로가기</S.Shortcut>
          <S.Img
            src={`https://img.youtube.com/vi/${ExportThumnail(
              url,
            )}/mqdefault.jpg`}
          />
        </S.Link>
      </S.ImgBox>
      <S.Contents>
        <S.ContentsFrame>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{explain}</S.SubTitle>
          <S.NickName>{name}</S.NickName>
          <S.Delete onClick={() => Delete(id)}>삭제</S.Delete>
        </S.ContentsFrame>
      </S.Contents>
    </S.PlayList>
  );
}

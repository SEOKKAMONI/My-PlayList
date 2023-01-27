import React from 'react';
import * as S from './style';

interface PropsType {
  title: string;
  url: string;
  explain: string;
  name: string;
}

export default function PlayList({ title, explain, url, name }: PropsType) {
  let replaceUrl: string;
  let finUrl: string[];

  const ExportThumnail = (youtubeUrl: string) => {
    replaceUrl = youtubeUrl.replace('https://youtu.be/', '');
    replaceUrl = youtubeUrl.replace('https://www.youtube.com/embed/', '');
    replaceUrl = youtubeUrl.replace('https://www.youtube.com/watch?v=', '');
    finUrl = replaceUrl.split('&');
    return finUrl[0];
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
          <S.Delete>삭제</S.Delete>
        </S.ContentsFrame>
      </S.Contents>
    </S.PlayList>
  );
}

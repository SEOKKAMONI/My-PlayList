import React from 'react';
import * as S from './style';
import Thumbnail from '../../Assets/Img/thumbnail.png';

interface PropsType {
  title: string;
  url: string;
  explain: string;
}

export default function PlayList({ title, explain, url }: PropsType) {
  return (
    <S.PlayList>
      <S.ImgBox>
        <S.Shortcut>바로가기</S.Shortcut>
        <S.Img src={Thumbnail} />
      </S.ImgBox>
      <S.Contents>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{explain}</S.SubTitle>
        <S.NickName>김석진</S.NickName>
      </S.Contents>
    </S.PlayList>
  );
}

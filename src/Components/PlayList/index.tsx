import React from 'react';
import * as S from './style';
import Thumbnail from '../../Assets/Img/thumbnail.png';

export default function PlayList() {
  return (
    <S.PlayList>
      <S.Img src={Thumbnail} />
      <S.Contents>
        <S.Title>(이수현X최정훈) - 대화가 필요해</S.Title>
        <S.SubTitle>설명 끄적끄적</S.SubTitle>
        <S.NickName>김석진</S.NickName>
      </S.Contents>
    </S.PlayList>
  );
}

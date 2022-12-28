import React from 'react';
import * as S from './style';

interface PropsType {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function SubmitButton({ onClick }: PropsType) {
  return <S.Button onClick={onClick}>추가하기</S.Button>;
}

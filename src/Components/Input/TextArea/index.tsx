import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextArea({ placeholder, setState }: PropsType) {
  return (
    <S.Frame>
      <S.Input
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
    </S.Frame>
  );
}

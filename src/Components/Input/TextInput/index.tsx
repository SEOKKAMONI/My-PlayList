import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextInput({ placeholder, setState }: PropsType) {
  return (
    <S.Frame>
      <S.Input
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
    </S.Frame>
  );
}

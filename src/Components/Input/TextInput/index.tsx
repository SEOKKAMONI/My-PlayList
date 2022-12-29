import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  state: string;
}

export default function TextInput({ placeholder, setState, state }: PropsType) {
  return (
    <S.Frame>
      <S.Input
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.currentTarget.value)}
      />
    </S.Frame>
  );
}

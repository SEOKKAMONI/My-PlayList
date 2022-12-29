import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  state: string;
}

export default function TextArea({ placeholder, setState, state }: PropsType) {
  return (
    <S.Frame>
      <S.Input
        type="text"
        value={state}
        placeholder={placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setState(e.currentTarget.value)
        }
      />
    </S.Frame>
  );
}

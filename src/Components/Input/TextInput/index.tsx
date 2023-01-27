import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
}

export default function TextInput({ placeholder, name, onChange }: PropsType) {
  return (
    <S.Frame>
      <S.Input name={name} placeholder={placeholder} onChange={onChange} />
    </S.Frame>
  );
}

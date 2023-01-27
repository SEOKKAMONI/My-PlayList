import React from 'react';
import * as S from './style';

interface PropsType {
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}

export default function TextArea({ placeholder, onChange, name }: PropsType) {
  return (
    <S.Frame>
      <S.Input name={name} placeholder={placeholder} onChange={onChange} />
    </S.Frame>
  );
}

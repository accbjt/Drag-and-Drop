import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = ({ isDone, children, onClick }) => (
  <ButtonContainer onClick={onClick} isDone={isDone}>
    {children}
  </ButtonContainer>
);

const ButtonContainer = styled.div(({ isDone }) => [
  tw`flex justify-center items-center font-light text-white text-xxs`,
  isDone ? tw`bg-pippen-green` : tw`bg-pippen-blue`,
]);

export default Button;

import React from 'react';
import styled from 'styled-components';

const Button = ({ isDone, children, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} isDone={isDone}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div.attrs(({ isDone }) => {
  let className = 'flex justify-center items-center font-light text-white text-xxs';

  if (isDone) {
    className = `${className} bg-pippen-green`;
  } else {
    className = `${className} bg-pippen-blue`;
  }

  return {
    className,
  };
})``;

export default Button;

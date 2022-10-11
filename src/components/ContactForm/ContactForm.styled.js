import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-top: 10px;
  color: blue;
  font-weight: 500;
`;

export const Label = styled.label`
  display: flex;
  margin-right: 5px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding-left: 5px;

  width: 150px;
  height: 30px;

  background-color: #e7e7e9;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  :focus,
  :hover {
    box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  }
`;

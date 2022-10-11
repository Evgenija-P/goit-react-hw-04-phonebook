import styled from '@emotion/styled';

export const List = styled.ul`
  width: 350px;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  :focus,
  :hover {
    color: blue;
  }
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

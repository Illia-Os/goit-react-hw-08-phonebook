import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7px 0;
  font-size: 24px;
`;

export const Button = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.05em;
  border: 1px solid #000;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);

    background-color: #ff7d7d;
    color: #fff;

    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;

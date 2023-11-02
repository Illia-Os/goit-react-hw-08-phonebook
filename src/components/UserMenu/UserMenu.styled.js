import styled from 'styled-components';

export const UserMenuDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 30px;
`;
export const UserHello = styled.p`
  color: black;
  font-weight: 400;
  font-size: 20px;
`;
export const UserName = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
export const Button = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.05em;
  border: 1px solid lightgray;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);

    background-color: #6c5b80;
    color: #fff;

    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;

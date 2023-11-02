import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  max-width: 500px;
  padding-left: 15px;
  gap: 5px;
  flex-direction: column;
  margin-top: 25px;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  width: 40%;
  border: 1px solid #000;
  padding: 7px 5px 3px 5px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;


  transition: 0.3s;

  &:focus-within {
box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
`;

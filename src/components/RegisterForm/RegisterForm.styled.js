import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 25px;
  width: 60%;
  max-width: 500px;
  padding: 10px 15px 15px 15px;
  border: 1.5px solid black;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
`;

export const FormItem = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const FormLabel = styled.label`
  font-size: 26px;
`;

export const FormInput = styled.input`
  width: 40%;
  border: 1px solid lightgray;
  padding: 7px 5px 3px 5px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus-within {
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
  }
`;

export const FormButton = styled.button`
  margin-top: 25px;
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

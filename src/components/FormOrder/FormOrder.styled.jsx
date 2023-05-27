import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 90vh;
  padding: 20px;
  background-color: #ebc7c7;
`;

export const Form = styled.form`
  position: relative;
  display: grid;
  height: 500px;
  background-color: #d8aaaa;
  border-radius: 20px;
`;

export const List = styled.ul`
  overflow: auto;
  height: 500px;
  padding: 20px;
  background-color: #1e1c1c;
  border-radius: 20px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #c66f6f;
  border-radius: 20px;
`;

export const Submit = styled.button`
  position: absolute;
  right: -900px;
  bottom: -70px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #4b3baf;
`;

export const Input = styled.input`
  height: 30px;
  text-align: center;
  outline: none;
  border-radius: 10px;
  &::-webkit-inner-spin-button {
    padding: 10px;
    cursor: pointer;
  }
`;

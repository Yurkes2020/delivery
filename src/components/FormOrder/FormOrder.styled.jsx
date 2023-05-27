import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 80vh;
  padding: 20px;
  background-color: #ebc7c7;
`;

export const Form = styled.form`
  display: grid;
  height: 90%;
  background-color: #d8aaaa;
  border-radius: 20px;
`;

export const List = styled.ul`
  overflow: auto;
  height: 90%;
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
  right: 50px;
  bottom: 20px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #4b3baf;
`;

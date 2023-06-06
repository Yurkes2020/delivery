import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  padding: 20px;
  background-color: #f4eaea;
`;

export const Form = styled.form`
  padding: 10px;
  position: relative;
  display: grid;
  height: 500px;
  background-color: #d3ddb5;
  border-radius: 20px;
`;

export const List = styled.ul`
  overflow: auto;
  margin-left: 20px;
  height: 500px;
  padding: 20px;
  background-color: #aedb55;
  border-radius: 20px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #84da39;
  border-radius: 20px;
  font-size: 30px;
`;

export const Submit = styled.button`
  cursor: pointer;
  position: absolute;
  right: -1100px;
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

export const User = styled.input`
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 25px;
`;

export const Remove = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: block;
  margin-top: 10px;
  padding: 5px 40px;
  font-size: 25px;
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  overflow: auto;
  margin-left: 10px;

  border-radius: 10px;
  height: 80vh;
  background-color: #31b4cf;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 40px;
`;

export const Item = styled.li`
  background-color: #0e3b52;
  border-radius: 20px;
  padding: 15px;
`;

export const Add = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 10px;
`;

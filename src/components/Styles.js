import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  border-radius: 10px;
  background-color: #ffffff10;
  border: 1px solid rgb(114 114 114 / 28%);
  box-shadow: 1px 2px 5px rgb(177 159 159 / 41%);
  backdrop-filter: blur(12px);
  padding: 3rem 7rem;
  -webkit-backdrop-filter: blur(12px);
`;
export const BoxImg = styled.div`
  text-align: center;
`;

export const BoxInput = styled.div`
  text-align: center;
`;
export const BoxButton = styled.div`
  text-align: center;
`;

export const ButtonGo = styled.div`
  cursor: pointer;
  border-radius: 4px;
  color: white;
  text-align: center;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  position: relative;
  border: 1px solid #1591c3;
  transition: 0.4s;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  &:hover {
    color: white;
    border: 2px solid #fff;
    background-color: #1591c3;
    svg {
      fill: white;
    }
  }
`;
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 20px 0px;
  background: #00133c;
  color: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #fff;
  }
`;

export const BoxText = styled.div`
  color: #fff;
`;

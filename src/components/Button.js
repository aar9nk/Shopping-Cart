import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: #007bff;
  border: none;
  border-radius:5px;
  background-color: ${props => (props.cart ? "#228B22" : "#007bff")}
  color: #fff;
  padding: 0.2rem 0.5rem;
  cursor: pointer; 
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: lightblue;
    color: darkblue;
  }
`;

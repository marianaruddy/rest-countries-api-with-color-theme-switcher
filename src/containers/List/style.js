import styled from "styled-components";
import { devices } from "../../devices";

export const ListWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
  margin: 0 20px;

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0;
  }
`;

export const PageContent = styled.div`
  background-color: hsl(0, 0%, 98%);
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 20px;

  @media ${devices.desktop} {
    padding: 20px 48px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  box-shadow: hsl(0, 0%, 52%) 0px 0px 16px -5px;
  border: none;
  height: 36px;
  padding: 0 20px 0;
  border-radius: 4px;
  min-width: 40%;
`;

export const Select = styled.select`
  box-shadow: hsl(0, 0%, 52%) 0px 0px 16px -5px;
  border: none;
  width: min-content;
  height: 36px;
  padding: 0 20px 0;
  border-radius: 4px;
`;
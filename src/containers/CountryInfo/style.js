import { Link } from "react-router-dom";
import styled from "styled-components";

export const FlagCard = styled(Link)`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  gap: 20px;
  box-shadow: hsl(0, 0%, 52%) 0px 0px 16px -5px;
`;

export const Flag = styled.img`
  width: 100%;
`;

export const FlagCardInfo = styled.div`
  margin: 8px 20px 30px 20px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;

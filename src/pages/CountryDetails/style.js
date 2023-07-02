import styled, { css } from "styled-components";
import { devices } from "../../devices";
import { Link } from "react-router-dom";

export const Content = styled.div`
    background-color: hsl(0, 0%, 98%);
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    gap: 20px;
    height: 100%;

    @media ${devices.desktop} {
        padding: 20px 48px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    flex-direction: column;

    @media ${devices.desktop} {
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        flex-direction: row;
    }
`;

export const Flag = styled.img`
    max-width: 100%;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

export const DetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%
`;

export const DetaisList = styled.div`
    display: grid;
    gap: 16px;
    margin: 16px 0;

    @media ${devices.desktop} {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin: 30px 0 40px 0;
    }
`;

export const Details1 = styled.div`
`;

export const Details2 = styled.div`
`;

const Button = css`
    color: black;
    text-decoration: none;
    box-shadow: hsl(0, 0%, 52%) 0px 0px 16px -5px;
    border: 1px solid hsl(209, 23%, 22%);
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackButton = styled(Link)`
    ${Button}
    max-width: 110px;
`;

export const BorderButton = styled(Link)`
    ${Button}
    box-shadow: rgb(133, 133, 133) 0px 0px 10px -5px;
    font-size: 14px;
`;

export const SectionTitle = styled.span`
    font-size: 18px;
    font-weight: 800;

    @media ${devices.desktop} {
        width: 220px;
    }
`;

export const BordersWrapper = styled.div`
    @media ${devices.desktop} {
        display: flex;
    }
`;

export const BorderButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

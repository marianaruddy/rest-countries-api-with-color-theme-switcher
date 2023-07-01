import styled from "styled-components";
import { devices } from "../../devices";

export const TopBarWrapper = styled.div`
    box-shadow: hsl(0, 0%, 52%) 0px 0px 16px -5px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 36px 12px;

    @media ${devices.desktop} {
        padding: 36px 48px;
    }
`;

export const H1 = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

export const DarkModeButton = styled.button`
    border: none;
    box-shadow: none;
    background: transparent;
    font-size: 16px;
`;
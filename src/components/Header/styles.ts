import styled from "styled-components";

export const Container = styled.div `
    background-color: #000000;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13rem;
    cursor: default;
`
export const LogoTitle = styled.p`
    color: #FFF;
    font-weight: 400;
    font-size: 22px;
`;

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`;
export const ImageHeaderContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
`;

export const ImageHeader = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
`
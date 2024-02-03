import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 300px;
    background-color: #1e1e1e;
    right: 0.5%;
    top: 6%;
    border-radius: 16px;
    padding: 40px 0 25px;
`;

export const MenuAvatarContainer = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: red;
    align-self: center;
`

export const MenuAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
`

export const MenuList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 2rem;
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #404040;
    padding: 1rem 0.5rem 1rem 1rem;
    cursor: pointer;
    &:hover {
        opacity: 0.4;
    }
`;

export const MenuItemFont = styled.div`
    color: #FFF;
    font-weight: bold;
`
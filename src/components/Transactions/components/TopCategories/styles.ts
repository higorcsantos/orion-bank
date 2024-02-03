import styled from "styled-components";
import { IPropsBackground } from "./IProps";

export const TopCategoriesContainer = styled.div`
    display: flex;
    margin-top: 1.5rem;
    flex-direction: column;
`;

export const TopCategoriesTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FFF;
`;

export const TopCategoriesSubTitle =  styled.p`
font-weight: 400;
font-size: 14px;
color: #A9A9B7;
`;

export const CardCategoriesContainer = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const CardCategories = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #0F0F13;
    padding: 20px 30px;
    gap: 1.5rem;
    border-radius: 16px;
    align-items: center;
`;

export const IconCategorieContainer = styled.div<IPropsBackground>`
    display: flex;
    background-color: ${({background}) => background};
    padding: 10px;
    border-radius: 16px;
    align-items: center;
    text-align: center;
    align-self: center;
`;

export const ICategoriesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ICategoriesInfoTitle = styled.p`
    font-size: 14px;
    color: #A9A9B7;
`;

export const ICategoriesInfoValue = styled.p`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 700px;
`


import styled from "styled-components";
import { IRoundIndicator, ITextCard } from "./IProps";

export const PeriodicalContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

export const PeriodicalTitle = styled.p`
    font-weight: 600;
    font-size: 28px;
    color: #fff;
    margin-bottom: 1.5rem;
`
export const PeriodicalCardContainer = styled.div`
    width: 558px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
`

export const PeriodicalCard = styled.div`
    width: 180px;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background-color: #1E1E24;
    border-radius: 100px;
    cursor: default;
    &:hover{
        opacity: 0.6;
    }
;
`

export const PeriodicalCardRound = styled.div<IRoundIndicator>`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: ${({ color }) => color};
`;

export const PeriodicalCardText = styled.p<ITextCard>`
    font-size: 12px;
    color: #F5F5FF;
    font-weight: ${({ fontWeight }) => fontWeight};
;
`
import styled from "styled-components";

export const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding: 0 300px;
`;

export const TransactionTitle = styled.p`
    font-weight: 600;
    font-size: 28px;
    color: white;
    margin-bottom: 1.5rem;
`;

export const TransactionCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const TransactionCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 40%;
`;

export const TransactionFontContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100px;
`

export const TransactionFont = styled.p`
    font-weight: 600;
    color: #FFF;
    font-size: 14px;
`;

export const TransactionDate = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #70707C;
;
`

export const ChartsContainer = styled.div`
    background-color: #000;
    position: absolute;
    height: 350px;
    top: 320px;
    left: 900px;
    border-radius: 16px;
    padding: 40px 30px;
`;

export const ArrowButton = styled.div`
    
`
import styled from 'styled-components';

export const CardInformationsContainer = styled.div`
    width: 100%;
    height: 30%;
    background-color: #0F0F13;
    display: flex;
    align-items: center;
    padding: 0 300px;
`;

export const CreditCard = styled.div`
    width: 282px;
    height: 176px;
    border-radius: 15px;
    background: linear-gradient(135deg, #24c6dc, #514a9d);
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
    position: relative;
    font-family: 'Arial', sans-serif;
`;

export const CreditCardLogo = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const Chip = styled.div`
    background-color: transparent;
    border-radius: 10px;
    position: absolute;
    right: 20px;
    bottom: 50px;
`;

export const CreditCardNumber = styled.div`
    margin-top: 8px;
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 15px;
    font-weight: bold;
`

export const CreditCardInfo = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const CreditCardLimit = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const CreditCardInfoNumber = styled.div`
    font-size: 16px;
    margin-top: 30px;
`;

export const BankContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BankHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
`
export const BankName = styled.p`
    font-size: 16px;
    font-weight: 500px;
    color: #FFF;
    margin-right: 10px;
`

export const BankTitleDivisor = styled.div`
    width: 3px;
    height: 1px;
    background-color: white;
    margin-right: 10px;
`
export const BankCreditCard = styled.div `
    font-weight: 700;
    font-size: 40px;
    color: #fff;
    margin-left: 100px;
`;

export const ChartsContainer = styled.div`
    width: 690px;
    height: 80px;
    margin-left: 100px;
    margin-top: 20px;
`;

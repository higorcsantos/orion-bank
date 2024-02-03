import { FC, useState } from "react"
import { BankContainer, BankCreditCard, BankHeaderContainer, BankName, BankTitleDivisor, CardInformationsContainer, ChartsContainer, Chip, CreditCard, CreditCardInfo, CreditCardInfoNumber, CreditCardLimit, CreditCardLogo, CreditCardNumber } from "./styles"
import { SiVisa } from "react-icons/si";
import { FcSimCardChip } from "react-icons/fc";
import ChartsInfo from "./components/ChartsInfo";

const CardInformations: FC = () => {
    const [value, setValue] = useState<number>(21308)
    const formattedValue = value.toLocaleString('pt-BR');
    return (
        <CardInformationsContainer>
            <CreditCard>
                <CreditCardLogo>
                    <SiVisa size={50} />
                </CreditCardLogo>
                <Chip>
                    <FcSimCardChip size={50} />
                </Chip>
                <CreditCardNumber>
                    R$ {formattedValue.replace('.', ',')}
                </CreditCardNumber>
                <CreditCardInfo>
                    Limite do Cartão
                </CreditCardInfo>
                <CreditCardLimit>
                    R$ 25,000
                </CreditCardLimit>
                <CreditCardInfoNumber>
                    Número do Cartão ****2400
                </CreditCardInfoNumber>
            </CreditCard>
            <BankContainer>
                <BankHeaderContainer>
                    <BankName>OrionBank</BankName>
                    <BankTitleDivisor />
                    <BankName>Platinum Card</BankName>
                </BankHeaderContainer>
                <BankCreditCard>Universal credit card</BankCreditCard>
                <ChartsContainer>
                    <ChartsInfo />
                </ChartsContainer>
            </BankContainer>
        </CardInformationsContainer>
    )
}

export default CardInformations
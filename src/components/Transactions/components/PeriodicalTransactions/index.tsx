import { PeriodicalCard, PeriodicalCardContainer, PeriodicalCardRound, PeriodicalCardText, PeriodicalContainer, PeriodicalTitle } from "./styles";

const PeriodicalTransactions: React.FC = () => {
    return (
        <PeriodicalContainer>
            <PeriodicalTitle>
                Transações Recorrentes
            </PeriodicalTitle>
            <PeriodicalCardContainer>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#0062FF" />
                    <PeriodicalCardText fontWeight={400}>Training</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$600</PeriodicalCardText>
                </PeriodicalCard>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#FFF736" />
                    <PeriodicalCardText fontWeight={400}>Internet</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$45</PeriodicalCardText>
                </PeriodicalCard>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#62F783" />
                    <PeriodicalCardText fontWeight={400}>Gaz station</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$135</PeriodicalCardText>
                </PeriodicalCard>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#FF8743" />
                    <PeriodicalCardText fontWeight={400}>Cinema</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$50</PeriodicalCardText>
                </PeriodicalCard>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#62F783" />
                    <PeriodicalCardText fontWeight={400}>Coffee</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$15</PeriodicalCardText>
                </PeriodicalCard>
                <PeriodicalCard>
                    <PeriodicalCardRound color="#A162F7" />
                    <PeriodicalCardText fontWeight={400}>Clothes</PeriodicalCardText>
                    <PeriodicalCardText fontWeight={600}>R$700</PeriodicalCardText>
                </PeriodicalCard>

            </PeriodicalCardContainer>
        </PeriodicalContainer>
    )
}

export default PeriodicalTransactions;
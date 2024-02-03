import { useState } from "react";
import ChartTransactions from "./components/ChartTransactions";
import PeriodicalTransactions from "./components/PeriodicalTransactions";
import TopCategories from "./components/TopCategories";
import { FaArrowDown, FaArrowUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ArrowButton, ChartsContainer, TransactionCard, TransactionCardsContainer, TransactionContainer, TransactionDate, TransactionFont, TransactionFontContainer, TransactionTitle } from "./styles"

interface IData {
    companyName: string;
    date: string;
    type: string;
    value: number
}

const data: IData[] = [
    {
        companyName: 'Apple Store',
        date: '03.02.2024',
        type: 'Débito',
        value: 129
    },
    {
        companyName: 'Farmácia',
        date: '03.02.2024',
        type: 'Crédito',
        value: 49
    },
    {
        companyName: 'Play Store',
        date: '02.02.2024',
        type: 'Crédito',
        value: 275
    },
    {
        companyName: 'Store',
        date: '03.02.2024',
        type: 'Débito',
        value: 129
    },
    {
        companyName: 'Steam',
        date: '03.02.2024',
        type: 'Crédito',
        value: 49
    },
    {
        companyName: 'Google Services',
        date: '02.02.2024',
        type: 'Crédito',
        value: 275
    },
    {
        companyName: 'Apple Store',
        date: '03.02.2024',
        type: 'Débito',
        value: 129
    },
    {
        companyName: 'Farmácia',
        date: '03.02.2024',
        type: 'Crédito',
        value: 49
    },
    {
        companyName: 'Play Store',
        date: '02.02.2024',
        type: 'Crédito',
        value: 275
    },
]

const Transactions: React.FC = () => {
    const [visibleTransactions, setVisibleTransactions] = useState(0);
    const [visibleIndex, setVisibleIndex] = useState(0);

    const scrollDown = () => {
        setVisibleIndex(prevIndex => Math.min(prevIndex + 3, data.length - 3));
    };

    const scrollUp = () => {
        setVisibleIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };
    return (
        <TransactionContainer>
            <TransactionTitle>Últimas Transações</TransactionTitle>
            <TransactionCardsContainer>
                {visibleIndex > 0 &&
                    <FaChevronUp
                        color="#FFF"
                        onClick={scrollUp}
                        style={{ cursor: 'pointer' }}
                         
                    />
                }
                {data.slice(visibleIndex, visibleIndex + 3).map(transaction => (
                    <TransactionCard>
                        <TransactionFontContainer>
                            <TransactionFont>
                                {transaction.companyName}
                            </TransactionFont>
                            <TransactionDate>
                                {transaction.date}
                            </TransactionDate>
                        </TransactionFontContainer>
                        <TransactionFontContainer>
                            <TransactionDate>{transaction.type}</TransactionDate>
                        </TransactionFontContainer>
                        <TransactionFontContainer>
                            <TransactionFont>R${transaction.value},00</TransactionFont>
                        </TransactionFontContainer>
                    </TransactionCard>
                ))}
            </TransactionCardsContainer>
            {visibleIndex < data.length - 3 && (
                <FaChevronDown
                    color="#FFF"
                    onClick={scrollDown}
                    style={{ cursor: 'pointer', marginTop: '1.5rem' }}
                />
            )}
            <PeriodicalTransactions />
            <ChartsContainer>
                <ChartTransactions />
                <TopCategories />
            </ChartsContainer>
        </TransactionContainer>
    )
}

export default Transactions;
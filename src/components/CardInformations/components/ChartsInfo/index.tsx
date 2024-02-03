import { FC, useEffect, useState } from "react";
import RadialBar from "../RadialBar";
import { ChartCard, ChartInfoCard, ChartInfoCardDescription, ChartInfoCardValue, ChartInfoContainer } from "./styles";

const ChartsInfo: FC = () => {
    const [incomeValue, setIncomeValue] = useState(75000);
    const [expenseValue, setExpenseValue] = useState(0);
    const [cashbackValue, setCashbackValue] = useState(0);
    const [incomePercentage, setIncomePercentage] = useState(100);
    const [expensePercentage, setExpensePercentage] = useState(0);
    const [cashbackPercentage, setCashbackPercentage] = useState(0);

    const expectedIncome = 75000;
    const expectedExpense = 50000;
    const expectedCashback = 2000;

    const getRandomValue = () => Math.round(Math.random() * (1000 - 50) + 50);


    useEffect(() => {
        const interval = setInterval(() => {
            const expenseAddition = getRandomValue();

            if (expenseValue < expectedExpense) {
                setExpenseValue((prevExpense) => prevExpense + expenseAddition);
            }

            if (incomeValue > 0) {
                setIncomeValue((prevIncome) => Math.max(prevIncome - expenseAddition, 0));
            }

            if (cashbackValue < expectedCashback) {
                setCashbackValue((prevCashback) => prevCashback + expenseAddition * 0.02);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [expenseValue, incomeValue]);


    useEffect(() => {
        setIncomePercentage((incomeValue / expectedIncome) * 100);
        setExpensePercentage(Math.min((expenseValue / expectedExpense) * 100, 100)); // Não exceder 100%
        setCashbackPercentage((cashbackValue / expectedCashback) * 100);
    }, [incomeValue, expenseValue, cashbackValue]);

    return (
        <ChartInfoContainer>
            <ChartCard>
                <RadialBar
                    percentage={incomePercentage}
                    background={""}
                    circleBackground={""}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    fontColor={"#FFFFFF"}
                    borderColor={"#5500FE"}
                    finalColor="#1f0357"
                />
                <ChartInfoCard>
                    <ChartInfoCardValue>
                        R${incomeValue.toLocaleString().replace('.', ',')}
                    </ChartInfoCardValue>
                    <ChartInfoCardDescription>
                        Renda
                    </ChartInfoCardDescription>
                </ChartInfoCard>
            </ChartCard>
            <ChartCard>
                <RadialBar
                    percentage={expensePercentage}
                    background={""}
                    circleBackground={""}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    fontColor={"#FFFFFF"}
                    borderColor={"#049eb5"}
                    finalColor={"#015461"}
                />
                <ChartInfoCard>
                    <ChartInfoCardValue>
                        R${expenseValue.toLocaleString().replace('.', ',')}
                    </ChartInfoCardValue>
                    <ChartInfoCardDescription>
                        Despesa
                    </ChartInfoCardDescription>
                </ChartInfoCard>
            </ChartCard>
            <ChartCard>
                <RadialBar
                    percentage={cashbackPercentage}
                    background={""}
                    circleBackground={""}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    fontColor={"#FFFFFF"}
                    borderColor={"#FF8412"}
                    finalColor={"#7F4209"}
                />
                <ChartInfoCard>
                    <ChartInfoCardValue>
                        R${cashbackValue.toLocaleString().replace('.', ',')}
                    </ChartInfoCardValue>
                    <ChartInfoCardDescription>
                        Cashback
                    </ChartInfoCardDescription>
                </ChartInfoCard>
            </ChartCard>
        </ChartInfoContainer>
    )
}

export default ChartsInfo
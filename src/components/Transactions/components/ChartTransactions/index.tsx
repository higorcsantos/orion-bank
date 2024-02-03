import { FC } from "react";
import { ChartContainer, ChartTransactionsContainer, ChartTransactionsTitle } from "./styles";
import BarChart from "../BarChart";

const ChartTransactions: FC = () => {
    return(
        <ChartTransactionsContainer>
            <ChartTransactionsTitle>
                Tendências de Gastos
            </ChartTransactionsTitle>
            <ChartContainer>
                <BarChart />
            </ChartContainer>
        </ChartTransactionsContainer>
    )
}

export default ChartTransactions;
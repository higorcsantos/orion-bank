import { FC } from "react";
import { CardCategories, CardCategoriesContainer, ICategoriesInfoContainer, ICategoriesInfoTitle, ICategoriesInfoValue, IconCategorieContainer, TopCategoriesContainer, TopCategoriesSubTitle, TopCategoriesTitle } from "./styles";
import { PiForkKnife } from "react-icons/pi";
import { AiOutlineApple } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";

const TopCategories: FC = () => {
    return (
        <TopCategoriesContainer>
            <TopCategoriesTitle>Top categorias por mês</TopCategoriesTitle>
            <CardCategoriesContainer>
                <CardCategories>
                    <IconCategorieContainer background="#000">
                        <PiForkKnife color="#0062FF" size={30}/>
                    </IconCategorieContainer>
                    <ICategoriesInfoContainer>
                        <ICategoriesInfoTitle>
                            Restaurantes
                        </ICategoriesInfoTitle>
                        <ICategoriesInfoValue>
                            R$3,000
                        </ICategoriesInfoValue>
                    </ICategoriesInfoContainer>
                </CardCategories>
                <CardCategories>
                    <IconCategorieContainer background="#F5F5FF">
                     <AiOutlineApple color="#000000" size={30}/>
                    </IconCategorieContainer>
                    <ICategoriesInfoContainer>
                        <ICategoriesInfoTitle>
                            Inscrições
                        </ICategoriesInfoTitle>
                        <ICategoriesInfoValue>
                            R$9.000,00
                        </ICategoriesInfoValue>
                    </ICategoriesInfoContainer>
                </CardCategories>
                <CardCategories>
                    <IconCategorieContainer background="#000000">
                        <FaCoffee color="#FD4438" size={30}/>
                    </IconCategorieContainer>
                    <ICategoriesInfoContainer>
                        <ICategoriesInfoTitle>
                            Software
                        </ICategoriesInfoTitle>
                        <ICategoriesInfoValue>
                            R$20.000,00
                        </ICategoriesInfoValue>
                    </ICategoriesInfoContainer>
                </CardCategories>
            </CardCategoriesContainer>
        </TopCategoriesContainer>
    )
}

export default TopCategories;
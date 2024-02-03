import { FC, useState } from "react";
import { MenuAvatar, MenuAvatarContainer, MenuContainer, MenuItem, MenuItemFont, MenuList } from "./styles";
import Avatar from '../../../../assets/6.png';

export const MenuProfile: FC = () => {
    return (
        <MenuContainer>
            <MenuAvatarContainer>
                <MenuAvatar src={Avatar} />
            </MenuAvatarContainer>
            <MenuList>
                <MenuItem>
                    <MenuItemFont>Perfil</MenuItemFont>
                </MenuItem>
                <MenuItem>
                    <MenuItemFont>Minhas Contas</MenuItemFont>
                </MenuItem>
                <MenuItem>
                    <MenuItemFont>Crédito</MenuItemFont>
                </MenuItem>
            </MenuList>
        </MenuContainer>
    )
}
import { FC, useState } from "react";
import { Container, ImageHeader, ImageHeaderContainer, LogoContainer, LogoTitle, MenuItems } from "./styles";
import { BiSolidBank } from 'react-icons/bi';
import { IoIosNotifications } from "react-icons/io";
import Avatar from '../../assets/6.png'
import { MenuProfile } from "./components/Menu";
import Notifications from "./components/Notification";

const Header: FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [opacity, setOpacity] = useState(0.5);

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleShowNotification = () => {
        setShowNotification(!showNotification)
    }

    const handleMouseEnter = () => setOpacity(1);

    const handleMouseLeave = () => setOpacity(0.5);

    return (
        <Container>
            {
                showMenu && <MenuProfile />
            }
            {
                showNotification && <Notifications />
            }
            <LogoContainer>
                <BiSolidBank color="white" size={30} />
                <LogoTitle>ORION BANK</LogoTitle>
            </LogoContainer>
            <MenuItems>
                <IoIosNotifications
                    color="white"
                    size={30}
                    style={{ cursor: 'pointer' }}
                    opacity={opacity}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleShowNotification}
                    onBlur={() => setShowNotification(false)}
                />
                <ImageHeaderContainer onClick={handleShowMenu}>
                    <ImageHeader src={Avatar} />
                </ImageHeaderContainer>
            </MenuItems>
        </Container>
    )
}

export default Header;
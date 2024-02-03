import { FC } from "react";
import { NotificationFont, NotificationItem, NotificationsContainer, NotificationsList } from "./styles";

const Notifications: FC = () => {
    return(
        <NotificationsContainer>
            <NotificationsList>
                <NotificationItem>
                    <NotificationFont>
                        Você tem uma nova notificação
                    </NotificationFont>
                </NotificationItem>
            </NotificationsList>
        </NotificationsContainer>
    )
}

export default Notifications
import styled from "styled-components";

export const NotificationsContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0.5%;
    top: 6%;
    background-color: #1e1e1e;
    border-radius: 16px;
`;

export const NotificationsList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NotificationItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0.5rem 1rem 1rem;
`;

export const NotificationFont = styled.div`
    color: #FFF;
    font-weight: bold;
`;
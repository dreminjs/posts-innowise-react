import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { NotificationItem } from "./NotifactionItem";
import { selectNotifications } from "../model/notification.selector";
import { removeNotification } from "../model/notificationSlice";
import styles from "./Notification.module.css";

export const NotificationList = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(selectNotifications);

  const handleRemove = (id: string) => {
    dispatch(removeNotification(id));
  };

  return (
    <ul className={styles.notificationList}>
      {notifications.map((item) => (
        <NotificationItem {...item} key={item.id} onRemove={handleRemove} />
      ))}
    </ul>
  );
};

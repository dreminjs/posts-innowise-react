import { FC, useEffect } from "react";
import { INotification } from "../model/notification.interfaces";
import { dotClass } from "../model/notification.classes";
import styles from "./Notification.module.css";

type INotificationItemProps = INotification & {
  onRemove: (id: string) => void;
};

export const NotificationItem: FC<INotificationItemProps> = ({
  id,
  type,
  message,
  onRemove,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.notifactionItem}>
      <div className={`${styles.dot} ${dotClass[type]}`} />
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={onRemove.bind(null, id)}>
        ×
      </button>
    </div>
  );
};

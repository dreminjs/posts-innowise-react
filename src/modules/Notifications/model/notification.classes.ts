import { INotification } from "./notification.interfaces";
import styles from "../ui/Notification.module.css";

export const dotClass: Record<INotification["type"], string> = {
  success: styles.dotSuccess,
  error: styles.dotError,
  info: styles.dotInfo,
};

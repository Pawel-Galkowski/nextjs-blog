import { Box, SxProps, Theme, Typography } from "@mui/material";
import { createPortal } from "react-dom";

interface NotificationProps {
  title: string;
  message: string;
  status: string;
}

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  status,
}) =>
  createPortal(
    <Box sx={[`${status}Styles`] as SxProps<Theme>}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{message}</Typography>
    </Box>,
    document.getElementById("notifications") as HTMLElement
  );

export default Notification;

const notificationStyles: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "var(--color-grey-100)",
  backgroundColor: "var(--color-grey-800)",
  padding: "0 var(--size-8)",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
  position: "fixed",
  height: "5rem",
  bottom: "0",
  width: "100%",
  left: 0,
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  "& h4": {
    fontSize: "var(--size-6)",
    margin: 0,
  },
  "& p": {
    margin: 0,
  },
  [theme.breakpoints.up("md")]: {
    width: "40rem",
    left: "calc(50% - 20rem)",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
  },
});

const successStyles = {
  ...notificationStyles,
  backgroundColor: "var(--color-success-500)",
  color: "var(--color-grey-800)",
};

const errorStyles = {
  ...notificationStyles,
  backgroundColor: "var(--color-error-500)",
};

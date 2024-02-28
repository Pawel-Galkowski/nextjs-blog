import { ContactDataProps, RequestStatusType } from "./types";

export async function sendContactData(contactDetails: ContactDataProps) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export const getFormStatus = (
  requestStatus: RequestStatusType,
  requestError?: string
) => {
  const notificationData = {
    pending: {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    },
    success: {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    },
    error: {
      status: "error",
      title: "Error!",
      message: requestError || "",
    },
  };

  return requestStatus !== null && notificationData[requestStatus];
};

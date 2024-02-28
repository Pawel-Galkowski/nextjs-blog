import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

import Notification from "@/components/utils/Notification";
import { getFormStatus, sendContactData } from "./utils";
import { ContactDataProps, RequestStatusType } from "./types";

import ContactFormStyles from "./styles";

const initialData: ContactDataProps = {
  email: "",
  name: "",
  message: "",
};

const ContactForm = () => {
  const [contactData, setContactData] = useState<ContactDataProps>(initialData);
  const [requestStatus, setRequestStatus] = useState<RequestStatusType>(null);
  const [requestError, setRequestError] = useState<string | undefined>();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      !!contactData && (await sendContactData(contactData));
      setRequestStatus("success");
      setContactData(initialData);
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }
  const notification = getFormStatus(requestStatus, requestError);

  const onChangeSnippet = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setContactData({
        ...contactData,
        [e.target.name]: e.target.value,
      });
    },
    [contactData]
  );

  return (
    <Box sx={ContactFormStyles.contactStyle}>
      <Typography variant="h4" sx={{ textAlign: 'center'}}>How can I help you?</Typography>
      <FormControl sx={ContactFormStyles.formStyle} required onSubmit={sendMessageHandler}>
        <Box sx={ContactFormStyles.inputBoxStyle}>
          <TextField
            name="email"
            label="Your Email"
            InputLabelProps={{ shrink: true }}
            value={contactData.email}
            onChange={onChangeSnippet}
          />
          <TextField
            name="name"
            label="Your Name"
            InputLabelProps={{ shrink: true }}
            value={contactData.name}
            onChange={onChangeSnippet}
          />
        </Box>
        <TextField
          name="message"
          multiline={true}
          label="Your Message"
          InputLabelProps={{ shrink: true }}
          value={contactData.message}
          onChange={onChangeSnippet}
        />
        <Button type="submit" variant="outlined">
          Send Message
        </Button>
      </FormControl>
      {notification && <Notification {...notification} />}
    </Box>
  );
};

export default ContactForm;

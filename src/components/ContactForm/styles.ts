const contactStyle = {
  margin: "var(--size-8) auto",
  borderRadius: "6px",
  backgroundColor: "var(--color-grey-100)",
  width: "90%",
  maxWidth: "50rem",
  padding: "var(--size-4)",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
  fontSize: "var(--size-6)",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: '100%',
  gap: 5,
  marginTop: 5
};
const inputBoxStyle = {
  display: "flex",
  flexDirection: "row",
  width: '100%',
  gap: 5,
  '& .MuiTextField-root': {
    width: '50%'
  }
};

export default { contactStyle, formStyle, inputBoxStyle }



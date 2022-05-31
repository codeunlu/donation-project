import { Alert } from "react-bootstrap";

function ErrorToast(msg) {
  return (
    <Alert key="danger" variant="danger">
      {msg}
    </Alert>
  );
}

export default ErrorToast;

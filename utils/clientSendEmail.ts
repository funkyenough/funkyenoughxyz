import { FormData } from "../components/Form";

export function clientSendEmail(data: FormData) {
  const apiEndpoint = "/api/serverSendEmail";

  // Header Content Type is necessary because it is encoded as plain text by default
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
}

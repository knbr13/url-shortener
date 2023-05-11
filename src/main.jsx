import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserContextWrapper from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextWrapper>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </UserContextWrapper>
);

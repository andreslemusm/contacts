import { ContactsProvider } from "./context/contacts";
import { ContactsRoute } from "./routes/contacts";

export const App = () => (
  <ContactsProvider>
    {/* Probably this is where you define your routes if you need too */}
    <ContactsRoute />
  </ContactsProvider>
);

import { createContext, useContext, useState } from "react";

type Contact = {
  uuid: string;
  name: string;
  email?: string;
  phone?: string;
};

const ContactsContext = createContext<{
  contacts: Array<Contact>;
  setContacts: React.Dispatch<React.SetStateAction<Array<Contact>>>;
} | null>(null);

const ContactsProvider = ({ children }: React.PropsWithChildren) => {
  const [contacts, setContacts] = useState<Array<Contact>>([]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

const useContactsContext = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(
      "useContactsContext must be used within a ContactsProvider",
    );
  }
  return context;
};

const getContactsWithPhone = (contacts: Array<Contact>) =>
  contacts.filter((contact) => contact.phone);

const getContactsWithEmail = (contacts: Array<Contact>) =>
  contacts.filter((contact) => contact.email);

const addContact = (
  setContacts: React.Dispatch<React.SetStateAction<Array<Contact>>>,
  { name, phone, email }: Omit<Contact, "uuid">,
) =>
  setContacts((prevContacts) => [
    ...prevContacts,
    { uuid: crypto.randomUUID(), name, phone, email },
  ]);

export type { Contact };
export {
  ContactsContext,
  ContactsProvider,
  useContactsContext,
  addContact,
  getContactsWithPhone,
  getContactsWithEmail,
};

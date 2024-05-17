import { ContactForm } from "./contact-form";
import { ContactList } from "./contact-list";

export const ContactsRoute = () => (
  <div className="mx-auto w-screen max-w-2xl px-3 py-10">
    <ContactForm />
    <div className="mb-9 mt-10 border-t border-zinc-800" />
    <ContactList />
  </div>
);

import { addContact, useContactsContext } from "../../context/contacts";
import { Input } from "../../components";
import { useRef, useState } from "react";

const ContactForm = () => {
  const { setContacts } = useContactsContext();

  const formElRef = useRef<React.ElementRef<"form">>(null);

  return (
    <form
      ref={formElRef}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        addContact(setContacts, { name, phone, email });

        // Clear the form and focus on the first input
        formElRef.current?.reset();
        (formElRef.current?.elements[0] as HTMLInputElement).focus();
      }}
      className="flex grow flex-col gap-y-4 self-center"
    >
      <label className="block text-sm font-medium leading-6 text-zinc-100">
        <span className="block pb-1 pl-3">Name</span>
        <Input type="text" name="name" placeholder="John doe" required />
      </label>
      <EmailAndOrPhoneField />
      <button
        type="submit"
        className="mt-4 block rounded-xl bg-pink-600 p-2 text-white outline-none transition focus:ring-2 focus:ring-inset focus:ring-pink-400"
      >
        Add contact
      </button>
    </form>
  );
};

const EmailAndOrPhoneField = () => {
  const [hasEmail, setHasEmail] = useState(false);
  const [hasPhone, setHasPhone] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <label className="block text-sm font-medium leading-6 text-zinc-100">
        <span className="block pb-1 pl-3">Email</span>
        <Input
          type="email"
          name="email"
          placeholder="mail@domain.com"
          onChange={(e) => setHasEmail(Boolean(e.currentTarget.value))}
          required={!hasPhone}
        />
      </label>
      <label className="block text-sm font-medium leading-6 text-zinc-100">
        <span className="block pb-1 pl-3">Phone</span>
        <Input
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          onChange={(e) => setHasPhone(Boolean(e.currentTarget.value))}
          required={!hasEmail}
        />
      </label>
    </div>
  );
};

export { ContactForm };

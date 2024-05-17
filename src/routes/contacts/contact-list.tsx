import { Fragment } from "react/jsx-runtime";
import { useContactsContext } from "../../context/contacts";
import { InboxIcon, PhoneIcon } from "../../assets/icons";

const ContactList = () => {
  const { contacts } = useContactsContext();
  const phoneCounter = contacts.filter((contact) => contact.phone).length;
  const emailCounter = contacts.filter((contact) => contact.email).length;

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center gap-5 p-2 sm:flex-row">
        <Counter
          count={phoneCounter}
          label={
            phoneCounter === 1 ? "Contact with phone" : "Contacts with phone"
          }
        />
        <Counter
          count={emailCounter}
          label={
            emailCounter === 1 ? "Contact with email" : "Contacts with email"
          }
        />
      </div>
      <ul className="flex flex-col gap-y-4 py-10">
        {contacts.map((contact) => (
          <li
            key={contact.uuid}
            className="rounded-xl border border-zinc-800 p-4"
          >
            <h3 className="font-bold text-zinc-300">{contact.name}</h3>
            <dl className="flex flex-col gap-x-5 gap-y-2 pt-2 sm:flex-row sm:items-center">
              {contact.email ? (
                <ContactItemDetail
                  icon={InboxIcon}
                  term="Email"
                  description={contact.email}
                />
              ) : null}
              {contact.phone ? (
                <ContactItemDetail
                  icon={PhoneIcon}
                  term="Phone"
                  description={contact.phone}
                />
              ) : null}
            </dl>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const Counter = ({ count, label }: { count: number; label: string }) => (
  <p className="text-gray-300">
    <span className="rounded-md bg-pink-500/10 px-1.5 py-0.5 text-pink-400">
      {count}
    </span>{" "}
    {label}
  </p>
);

const ContactItemDetail = ({
  icon: Icon,
  term,
  description,
}: {
  icon: React.FC<React.ComponentProps<"svg">>;
  term: string;
  description: string;
}) => (
  <div className="flex items-center gap-x-2">
    <Icon className="h-5 w-5 text-zinc-500" aria-hidden />
    <dt className="sr-only">{term}</dt>
    <dd className="text-zinc-400">{description}</dd>
  </div>
);

export { ContactList };

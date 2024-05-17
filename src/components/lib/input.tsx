export const Input = (
  props: Omit<React.ComponentProps<"input">, "className">,
) => (
  <input
    className="block w-full rounded-xl border-0 bg-zinc-800 py-1.5 text-zinc-100 ring-1 ring-inset ring-zinc-700 transition duration-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
    {...props}
  />
);

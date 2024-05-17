import { Config } from "tailwindcss";
import tailwindCssFormsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindCssFormsPlugin],
} satisfies Config;

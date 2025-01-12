import { Montserrat, Mynerve } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Specify the font weights you need
});

export const mynerve = Mynerve({
  subsets: ["latin"],
  weight: ["400"], // Mynerve usually has only one weight
});

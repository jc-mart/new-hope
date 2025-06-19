import { Lusitana } from "next/font/google";
import { Host_Grotesk } from "next/font/google";

export const hostGrotesk = Host_Grotesk({
    subsets: ['latin']
});
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});
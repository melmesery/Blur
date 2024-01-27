import { Dancing_Script as Font } from "next/font/google";

const font = Font({
    subsets: ["latin"],
    weight: "400"
});

export default function Logo() {
    return (
        <p className={`${font.className} mb-0`}>Blur</p>
    )
}

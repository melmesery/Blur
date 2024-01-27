'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/results/${search}`);
        setSearch('');
    }
    return (
        <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="bg-gray-200 py-2 ps-4 w-[160px] sm:w-80 text-xl outline-none text-black"
            />
        </form>
    )
}

import Link from "next/link";
import { IoPlayBackSharp, IoPlayForward } from "react-icons/io5";

type Props = {
    term: string;
    page: string | undefined;
    prevPage: string | null;
    nextPage: string | null;
    totalPages: number;
};

export default function PaginationFooter({
    term,
    page,
    prevPage,
    nextPage,
}: Props) {
    if (!prevPage && !nextPage) return;

    const pageNums: number[] = [];
    if (prevPage && nextPage) {
        for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
            pageNums.push(i);
        }
    }

    const nextPageArea = nextPage ? (
        <Link
            href={`/results/${term}/${nextPage}`}
            className={!prevPage ? "mx-auto" : ""}
        >
            {!prevPage ? (
                <p className="bg-[#2664d6] text-white font-bold px-6 py-2 opacity-75 hover:opacity-100">
                    Show More
                </p>
            ) : null}
            {prevPage ? <IoPlayForward /> : null}
        </Link>
    ) : null;

    const prevPageArea = prevPage ? (
        <>
            <Link
                href={`/results/${term}`}
                className={!nextPage ? "mx-auto" : ""}
            >
                {nextPage ? <IoPlayBackSharp /> : null}
                {!nextPage ? (
                    <p className="bg-[#2664d6] text-white font-bold px-6 py-2 opacity-75 hover:opacity-100">
                        Back
                    </p>
                ) : null}
            </Link>

            {pageNums?.map((num, i) =>
                page && num === parseInt(page) ? (
                    <span
                        key={i}
                        className="border border-black text-black grid items-center justify-center w-10 h-10 rounded-full opacity-75 hover:opacity-100"
                    >
                        {num}
                    </span>
                ) : (
                    <Link
                        key={i}
                        href={`/results/${term}/${num}`}
                        className="bg-gray-200 grid items-center justify-center w-10 h-10 rounded-full opacity-75 hover:opacity-100"
                    >
                        {num}
                    </Link>
                )
            )}
        </>
    ) : null;

    return (
        <footer className="flex flex-row justify-between items-center px-2 py-4 w-60 mx-auto">
            {prevPageArea}
            {nextPageArea}
        </footer>
    );
}

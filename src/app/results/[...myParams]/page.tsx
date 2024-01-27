import Gallery from "@/components/Gallery.tsx";
import Logo from "@/components/Logo.tsx";

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMetadata({ params: { myParams } }: Props) {
  const term = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return {
    title: `Results for ${term} - Page ${page}`,
  };
}

export default function SearchResults({ params: { myParams } }: Props) {
  const term = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return (
    <>
      <section className="min-h-[40vh] sm:min-h-[60vh] bg-[#254F1A] text-[#D2E823]">
        <div className="pt-14 sm:pt-32 ps-5 sm:ps-10">
          <h1 className="text-4xl sm:text-8xl text-[#D2E823] mb-5">
            <Logo />
          </h1>
          <p className="text-3xl sm:text-5xl font-bold mb-5">
            You searched for <span className="capitalize">&apos;{term}&apos;</span>
          </p>
        </div>
      </section>
      <Gallery term={term} page={page} />
    </> 
  );
}


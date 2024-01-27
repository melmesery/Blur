import fetchImages from "@/lib/fetchImages.ts";
import addBlurredDataUrls from "@/lib/getBase64.ts";
import { ImagesResults } from "@/models/Images.ts";
import ImgContainer from "./ImgContainer.tsx";
import getPrevNextPages from "../lib/getPrevNextPages.ts";
import PaginationFooter from "./PaginationFooter.tsx";

type Props = {
  term?: string | undefined;
  page?: string | undefined;
};

export default async function Gallery({ term = "curated", page }: Props) {
  let url;
  if (term === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (term === "curated") {
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${term}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${term}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photoWithBlur = await addBlurredDataUrls(images);

  // Calculate Pagination
  const { prevPage, nextPage, totalPages } = getPrevNextPages(images);

  const paginationProps = { term, page, prevPage, nextPage, totalPages };

  return (
    <>
      <section className="w-full bg-[#F3F3F1] py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-gallery auto-rows-[15px] ">
          {photoWithBlur?.map((photo) => (
            <ImgContainer key={photo.id} photo={photo} />
          ))}
        </div>
      </section>

      {/* Pagination Footer */}
      <PaginationFooter {...paginationProps} />
    </>
  );
}

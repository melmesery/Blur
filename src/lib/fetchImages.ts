import { ImagesResults, ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env.ts";

export default async function fetchImages(
    url: string
): Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                // Authorization: env.PEXELS_API_KEY,
                Authorization: 'bd0PfAr0be3EvHnobx0J1oCjf4pfIenKDMQ7zx3STnqCiihXU8jwRcuH',
            },
        });

        if (!res.ok) throw new Error("Fetch images error!\n");

        const imagesResults: ImagesResults = await res.json();

        // Parse data with Zod schema

        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);

        if (parsedData.total_results === 0) return undefined;

        return parsedData;

    } catch (e) {
        // Will show in terminal console
        if (e instanceof Error) console.log(e.stack)
    }
}

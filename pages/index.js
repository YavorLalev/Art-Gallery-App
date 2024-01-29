import ArtPiecePreview from "@/components/ArtPiecePreview";
import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art");
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPiecePreview pieces={data}></ArtPiecePreview>
    </div>
  );
}

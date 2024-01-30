import ArtPiecePreview from "@/components/ArtPiecePreview";
import useSWR from "swr";
import Spotlight from "@/components/Spotlight";
import { getRandomImage } from "@/utils/getRandomArtPiece";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (!isLoading) {
    <p>Loading...</p>;
  }
  if (!error) {
    <p>404 error</p>;
  }

  const spotlightPiece = data ? getRandomImage(data) : null;

  return (
    <div>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <Spotlight
          artist={spotlightPiece.artist}
          image={spotlightPiece.imageSource}
        ></Spotlight>
      )}
      <ArtPiecePreview pieces={data}></ArtPiecePreview>
    </div>
  );
}

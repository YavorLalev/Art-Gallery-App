// import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Spotlight from "@/components/Spotlight";
import { getRandomImage } from "@/utils/getRandomArtPiece";

export default function HomePage({ fetchPieces }) {
  const spotlightPiece = fetchPieces ? getRandomImage(fetchPieces) : null;

  return (
    <div>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <Spotlight
          artist={spotlightPiece.artist}
          image={spotlightPiece.imageSource}
        ></Spotlight>
      )}
      <ArtPiecePreview pieces={fetchPieces}></ArtPiecePreview>
    </div>
  );
}

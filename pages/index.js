import SpotlightPage from "@/components/Spotlight";
import { getRandomImage } from "@/utils/getRandomArtPiece";

export default function HomePage({ fetchPieces }) {
  const spotlightPiece = fetchPieces ? getRandomImage(fetchPieces) : null;

  return (
    <div>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <SpotlightPage
          artist={spotlightPiece.artist}
          image={spotlightPiece.imageSource}
          name={spotlightPiece.name}
        ></SpotlightPage>
      )}
    </div>
  );
}

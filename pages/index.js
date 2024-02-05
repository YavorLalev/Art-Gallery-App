import Spotlight from "@/components/Spotlight/index.js";

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pieces ? getRandomImage(pieces) : null;

  return (
    <div>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          title={spotlightPiece.name}
        ></Spotlight>
      )}
    </div>
  );
}
const getRandomImage = (pieces) => {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
};

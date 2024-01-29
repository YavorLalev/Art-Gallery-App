import ArtPieces from "../ArtPieces";

export default function ArtPiecePreview({ pieces }) {
  return (
    <>
      {pieces && (
        <ul>
          {pieces.map((piece) => (
            <ArtPieces
              key={piece.slug}
              image={piece.imageSource}
              name={piece.name}
              artist={piece.artist}
            ></ArtPieces>
          ))}
        </ul>
      )}
    </>
  );
}

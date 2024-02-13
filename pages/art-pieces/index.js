import ArtPieces from "@/components/ArtPieces";
import Button from "@/components/FavoriteButton";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}

import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        artist={currentArtPiece.artist}
        image={currentArtPiece.imageSource}
        title={currentArtPiece.name}
        year={currentArtPiece.year}
        genre={currentArtPiece.genre}
      ></ArtPieceDetails>
    </>
  );
}

import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function AllItemsPreview({ fetchPieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPiecePreview pieces={fetchPieces}></ArtPiecePreview>
    </div>
  );
}

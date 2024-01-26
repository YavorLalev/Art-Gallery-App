import Image from "next/image";
import useSWR from "swr";

export default function ArtPieces() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art");

  return (
    <>
      <ul>
        <li>test</li>
      </ul>
    </>
  );
}

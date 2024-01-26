import Image from "next/image";
import useSWR from "swr";

export default function ArtPiecePreview() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art");

  return (
    <>
      {data &&
        data.map((item) => (
          <li key={item.name}>
            <Image src={item.imageSource} width={200} height={200} alt="" />
            {item.artist}
          </li>
        ))}
    </>
  );
}

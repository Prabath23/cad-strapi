
import HighlightedText from "./HighlightedText";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";


interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}


interface ClientsProps {
  data: {
    id: string;
    topic: string;
    picture: Picture;
  };
}


export default function Clients({ data }: ClientsProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="client-logo bg-black text-white py-10">
      {/* Title */}
      <div className="client-logo-title text-center text-3xl font-semibold my-5">
        <HighlightedText
          text={data.topic}
          tag="h1"
          className="text-[32px] font-normal leading-[40px] text-center mb-8"
          color="text-violet-400"
        />
      </div>
      
      {/* Image */}
      <div className="client-logo-image flex justify-center py-4">
        <Image
          src={imgUrl ?? ""}
          alt={data.picture.data?.attributes.alternativeText || "none provided"}
          className="py-3 img-fluid"
          width={1200} // Adjust based on actual image size
          height={154}
        />
      </div>
    </section>
  );
}



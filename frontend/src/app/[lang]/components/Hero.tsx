import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

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

interface HeroProps {
  data: {
    id: string;
    title: string;
    title_two: string;
    title_three: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section
    className="dark:bg-black dark:text-gray-100 min-h-screen"
    style={{
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:items-center">
      <div className="flex flex-col p-6 lg:text-left">
      <HighlightedText
      text={data.title}
      tag="h1"
      className="text-[222px] font-bold leading-none sm:text-[222px] mb-8 text-[#d9f509]"
      color="dark:text-violet-400"
    />

    <HighlightedText
      text={data.title_two}
      tag="h1"
      className="text-[222px] font-bold leading-none sm:text-[222px] mb-8 text-[#f5ffa7]"
      color="dark:text-violet-400"
    />

    <HighlightedText
      text={data.title_three}
      tag="h1"
      className="text-[222px] font-bold leading-none sm:text-[222px] mb-8 text-[#d9f509]"
      color="dark:text-violet-400"
    />

  
        {/* Description and buttons section aligned to the right */}
        <div className="text-right lg:text-right lg:ml-auto">
        <HighlightedText
          text={data.description}
          tag="p"
          className="tmt-6 mb-8 text-[32px] font-bold leading-[40px] text-[#fff] text-right w-1/2 ml-auto"
        />
          <div className="outer-div flex flex-col space-y-4 sm:items-center sm:justify-end sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end">
          <div className="inner-div hover:shadow-custom"
          style={{
            border: '5px solid #d9f509',
            borderRadius: '50px',
            padding: '13px 2px',
          }}
          >
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className="btn-custom"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>

        </div>
      </div>
    </div>
  </section>
  
  );
}

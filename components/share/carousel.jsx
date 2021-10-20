import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/router";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export function Carousel() {
  const router = useRouter();
  const maxIndex = ListItems.length;
  const [index, setIndex] = useState(1);
  const changeIndex = (ind) => {
    if (index + ind < 1) setIndex(maxIndex);
    else if (index + ind > maxIndex) setIndex(1);
    else setIndex(index + ind);
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="justify-start">
        <i
          className="text-4xl md:text-6xl font-extralight text-gray-500 cursor-pointer transition-colors duration-200 hover:text-yellow-500"
          onClick={() => changeIndex(-1)}
        >
          <HiOutlineArrowNarrowLeft />
        </i>
      </div>
      <div className="w-3/4 flex justify-center items-center flex-col">
        <div className={"  h-full" + ` w-full `}>
          {ListItems.map((item, ind) => {
            if (index - 1 == ind)
              return (
                <div
                  key={ind}
                  className={
                    "flex animation w-full mx-auto relative items-center justify-center py-40 max-h-96 transition-all duration-300 opacity-100 " +
                    (index - 1 == ind
                      ? " visible opacity-100"
                      : " invisible opacity-0")
                  }
                >
                  <div className="flex flex-col items-start z-50 pr-5">
                    <div className="text-6xl pb-10 w-80 text-left scale transition-all duration-300">
                      {item.title}
                    </div>
                    <div className="uppercase text-gray-400">
                      {item.description}
                    </div>
                    <div className=" text-gray-400">{item.type}</div>
                    <div className="text-green-400">{item.year}</div>
                    <div className=" flex pt-10 absolute bottom-0">
                      <div
                        className=" cursor-pointer pr-2 text-yellow-500 transition-all duration-300 hover:text-yellow-700 "
                        onClick={() => {
                          router.push(`${item.linkProduct}`);
                        }}
                      >
                        Demo
                      </div>
                      |
                      <div
                        className=" cursor-pointer  pl-2 text-yellow-500 transition-all duration-300 hover:text-yellow-700 "
                        onClick={() => {
                          router.push(`${item.linkGithub}`);
                        }}
                      >
                        Source
                      </div>
                    </div>
                  </div>
                  <div className="z-50 shadow-2xl">
                    <img
                      src={item.img}
                      className="max-h-96 max-w-xl scale transform transition-all duration-300"
                    />
                  </div>
                  <div className="absolute right-1/2 top-1/6 transform transition-all duration-300">
                    <img src={item.shape} className="h-80 " />
                  </div>
                </div>
              );
          })}
        </div>
        <div className="relative pt-1 w-1/3 mt-10">
          <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-yellow-200">
            <div
              className={
                "shadow-none rounded flex flex-col text-center whitespace-nowrap justify-center bg-yellow-500 transition-all transform duration-200" +
                ` w-1/${maxIndex} ` +
                `translate-x-${index - 1}/1`
              }
            ></div>
          </div>
        </div>
      </div>
      <div className="justify-end">
        <i
          className="text-4xl md:text-6xl font-extralight text-gray-500 cursor-pointer transition-colors duration-200 hover:text-yellow-500"
          onClick={() => changeIndex(1)}
        >
          <HiOutlineArrowNarrowRight />
        </i>
      </div>
    </div>
  );
}
const ListItems = [
  // {
  //   title: "Smartloyalty",
  //   type: "NextJS | TailwindCSS",
  //   year: "2021",
  //   shape: "images/shape1.svg",
  //   description: "",
  //   img: "https://i.imgur.com/8VnKU7E.png",
  //   linkProduct: "",
  //   linkGithub: "",
  // },
  {
    title: "Toeic Practice",
    type: "Java | JS | HTML5 | CSS",
    year: "2020",
    shape: "images/shape3.svg",
    description: "",
    img: "https://i.imgur.com/mdUmtld.png",
    linkProduct: "https://www.youtube.com/watch?v=zRWvFNz5fiw",
    linkGithub: "https://github.com/quangvinhbee/Web_Toeic",
  },
  {
    title: "Game Caro Online ",
    type: "NextJS | MaterialUI | Firebase",
    year: "2020",
    shape: "images/shape2.svg",
    description: "",
    img: "https://i.imgur.com/B1UMNQO.png",
    linkProduct: "https://game-caro-nextjs.vercel.app/",
    linkGithub: "https://github.com/quangvinhbee/game-caro-nextjs",
  },
];

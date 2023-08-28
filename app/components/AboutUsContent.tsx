import AnimatedTextCharacter from "~/components/AnimatedTextCharacter";
export const AboutUsContent = () => {
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ position: "relative", height: "100vh", minHeight: "700px" }}
    >
      <div className="flex h-full w-full items-center justify-between">
        <div className="m-[1rem] flex h-1/2 w-1/3 items-end justify-center  rounded bg-[url('/assets/photos/Photo_04.jpeg')] bg-cover  text-orange-500 hover:border-4 	hover:border-solid  ">
          <AnimatedTextCharacter
            className="my-[2em] h-2/3 items-end justify-center border-4 border-dotted border-orange-500 p-[1em] backdrop-blur  "
            text="關於我們"
          />
        </div>
        <div className=" m-[1rem] flex	 h-1/2 w-1/3  items-end justify-center rounded  bg-[url('/assets/photos/Photo_05.jpeg')] bg-cover  text-orange-500	hover:border-4 hover:border-solid   ">
          <AnimatedTextCharacter
            className="my-[2em] h-2/3 items-end justify-center border-4 border-dotted border-orange-500 p-[1em] backdrop-blur  "
            text="我要捐款"
          />
        </div>
        <div className="m-[1rem] flex h-1/2 w-1/3 items-end justify-center  rounded bg-[url('/assets/photos/Photo_06.jpeg')] bg-cover  text-orange-500	 hover:border-4 hover:border-solid ">
          <AnimatedTextCharacter
            className="my-[2em] h-2/3 items-end justify-center border-4 border-dotted border-orange-500 p-[1em] backdrop-blur 	"
            text="加入志工"
          />
        </div>
      </div>
    </div>
  );
};

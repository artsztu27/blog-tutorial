import { ImageContent } from "~/components/ImageContent";
import { AboutUsContent } from "~/components/AboutUsContent";
export default function Index() {
  return (
    <div className="  mx-0 my-[2em] flex min-h-[300px] flex-[1] flex-col items-center justify-center">
      <div>
        <ImageContent />
      </div>
      <div className="mx-0	 my-[2em]  flex w-full flex-[1] flex-col items-center">
        <AboutUsContent />
      </div>
    </div>
  );
}

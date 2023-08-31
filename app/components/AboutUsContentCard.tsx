import { NavLink } from "@remix-run/react";
import AnimatedTextCharacter from "~/components/AnimatedTextCharacter";

export const AboutUsContentCard = () => {
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ position: "relative", height: "100vh", minHeight: "700px" }}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* 關於我們 */}
        <div className="mx-2 my-8  h-5/6  w-1/3 overflow-hidden rounded shadow-lg">
          <img
            className="h-2/6 w-full"
            src="assets/photos/Photo_04.jpeg"
            alt="關於我們"
          ></img>
          <div className="h-3/6 px-6 py-4">
            <AnimatedTextCharacter
              className="mb-2 overflow-visible text-xl font-bold "
              text="關於我們"
            />
            <p className=" text-base text-gray-600">
              2008年大同課輔班成立，讓這群遊蕩的孩子有熱騰騰的晚餐，有人陪伴寫作業，讓這群弱勢孩童有個共同的家。在2010年成立了社團法人屏東縣都市原住民全人發展關懷協會，提供孩子更穩定的服務...
            </p>
            <NavLink to="/know" className="text-base text-sky-500">
              更多
            </NavLink>
          </div>
          <div className="h-1/6  px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #aboutUs
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #大同
            </span>
          </div>
        </div>
        {/* 我要捐款 */}
        <div className="mx-2 my-8 h-5/6 w-1/3 max-w-sm overflow-hidden rounded shadow-lg">
          <img
            className="h-2/6 w-full"
            src="assets/photos/Photo_05.jpeg"
            alt="我要捐款"
          ></img>
          <div className="h-3/6 px-6 py-4">
            <AnimatedTextCharacter
              className="mb-2 overflow-visible text-xl font-bold "
              text="我要捐款"
            />
            <div className="flex  flex-col">
              {/* Start of the tag  */}
              <div className="my-5 inline-flex overflow-hidden rounded">
                <span className="bg-gray-700 px-2 leading-loose text-gray-100">
                  劃撥帳號
                </span>
                <span className="bg-purple-700 px-2 leading-loose text-white">
                  42302376
                </span>
              </div>
              {/* End of the tag */}
              {/* Start of the tag  */}
              <div className="inline-flex overflow-hidden rounded ">
                <span className="bg-gray-600 px-2 leading-loose text-gray-100">
                  捐款帳號
                </span>
                <span className="bg-sky-500 px-2 leading-loose text-white">
                  (700)中華郵政
                  <br />
                  局號：0071213
                  <br />
                  帳號：0155879
                </span>
              </div>
              {/* End of the tag */}
            </div>
          </div>
          <div className="h-1/6  px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #donateUs
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #劃撥帳號
            </span>
          </div>
        </div>
        {/* 加入志工 */}
        <div className="mx-2 my-8 h-5/6 w-1/3 max-w-sm overflow-hidden rounded shadow-lg">
          <img
            className="h-2/6 w-full"
            src="assets/photos/Photo_06.jpeg"
            alt="加入志工"
          ></img>
          <div className="h-3/6 px-6 py-4">
            <AnimatedTextCharacter
              className="mb-12 overflow-visible text-xl font-bold "
              text="加入志工"
            />
            <p className=" my-8 text-base text-gray-600">志工夥伴熱情招募中</p>
            <NavLink to="/" className="text-base text-sky-500">
              填寫表單
            </NavLink>
          </div>
          <div className="h-1/6  px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #joinUs
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
              #志工
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Donate() {
  return (
    <div className="xxl:px-40 flex flex-col bg-gray-100 px-4 py-16 text-center md:px-8 lg:px-16 xl:px-24">
      <div className="mt-12 items-start justify-around sm:-mx-2 sm:flex">
        <div className="h-72 w-full rounded-lg bg-white px-4 py-8 shadow-lg sm:mx-2 sm:w-1/3 lg:mx-6	">
          <div className="h-24">
            <img
              src="/assets/images/icon-home-2.svg"
              alt=""
              className="mx-auto"
            />
          </div>
          <h4 className="text-md mt-10 font-bold uppercase text-gray-800">
            劃撥帳號
          </h4>
          <p className="mt-2 text-base text-gray-600">42302376</p>
        </div>
        <div className="h-72 w-full rounded-lg bg-white px-4 py-8 shadow-lg sm:mx-2 sm:w-1/3 lg:mx-6	">
          <div className="h-24">
            <img
              src="/assets/images/icon-home-3.svg"
              alt=""
              className="mx-auto"
            />
          </div>
          <h4 className="text-md mt-10 font-bold uppercase text-gray-800">
            捐款帳號
          </h4>
          <p className="mt-2 text-base text-gray-600">
            (700)中華郵政 <br />
            局號：0071213
            <br /> 帳號：0155879
          </p>
        </div>
      </div>
    </div>
  );
}

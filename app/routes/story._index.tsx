import { NavLink } from "@remix-run/react";

export default function Story() {
  return (
    <>
      <div className="-m-3 flex flex-wrap">
        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1497398276231-94ff5dc90217?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My much longer heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat
                  placeat numquam aspernatur, accusamus magnam neque.
                </p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1503863937795-62954a3c0f05?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>Shorter text.</p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>Shorter text.</p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1525935944571-4e99237764c9?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat
                  placeat numquam aspernatur, accusamus magnam neque.
                </p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col p-3 sm:w-1/2 md:w-1/3">
          <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 bg-[url(https://images.unsplash.com/photo-1486506574467-c44963fc7876?w=900)] bg-cover"></div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="text-grey-darker mb-4 flex-1 text-sm">
                <p>Longer content.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat
                  placeat numquam aspernatur, accusamus magnam neque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat
                  placeat numquam aspernatur, accusamus magnam neque.
                </p>
              </div>
              <NavLink
                to="#"
                className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
              >
                Facebook
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

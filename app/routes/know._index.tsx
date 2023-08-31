import { NavLink } from "@remix-run/react";

export default function Know() {
  return (
    <>
      <NavLink to="purpose" className="text-base text-sky-500">
        <div className="blog-card">
          <div className="meta">
            <div className="photo bg-[url('/assets/photos/Photo_07.jpeg')] bg-auto"></div>
            <ul className="details">
              <li className="author">協會起源</li>
              <li className="date">Aug. 24, 2015</li>
            </ul>
          </div>
          <div className="description">
            <h1>協會起源</h1>
            <h2>Opening a door to the future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p className="read-more">
              <NavLink to="purpose" className="text-base text-sky-500">
                更多
              </NavLink>
            </p>
          </div>
        </div>
      </NavLink>
      <div className="blog-card alt">
        <div className="meta">
          <div className="photo bg-[url('/assets/photos/Photo_05.jpeg')] bg-auto"></div>
          <ul className="details">
            <li className="author">
              <NavLink to="/know" className="text-base text-sky-500">
                協會任務
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </>
  );
}

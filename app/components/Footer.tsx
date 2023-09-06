export const Footer = () => {
  return (
    <footer className="text-text-secondary dark:text-d-text-secondary mx-auto my-4 flex w-full max-w-7xl flex-col   px-8 pt-4 text-center text-[0.8rem] ">
      <div className="flex flex-row items-center justify-start ">
        <div className="flex flex-col justify-start ">
          <div className="flex  ">地址：屏東市民族路750號</div>
          <div className="flex 	">電話：(08)732-8873</div>
          <div className="flex 	">E-mail：tatungkiukai8873@gmail.com</div>
        </div>
        {/* <div className="flex flex-col justify-start px-5 ">
          <a
            href="https://www.facebook.com/groups/624024120963084"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="follow us on facebook"
              src="assets/images/Facebook_icon.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div> */}
        <div className="flex flex-col justify-start px-5 ">
          {/*  eslint-disable-next-line jsx-a11y/iframe-has-title*/}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftatung.kuikai&tabs=timeline&width=350&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="350"
            height="200"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="mt-3 items-center justify-center">
        &copy; {new Date().getFullYear()}
        社團法人屏東縣都市原住民全人關懷發展協會.
        <br />
        &copy; All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

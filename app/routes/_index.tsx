import { motion } from "framer-motion";
import AnimatedTextCharacter from "~/components/AnimatedTextCharacter";
import { ImageView } from "~/components/ImageView";
import {
  containerVariants,
  imageLoadAnimationProps,
} from "~/config/animationConfig";

export default function Index() {
  return (
    <div className="max-w-md:flex-col mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md:flex-[0 max-w-md:pb-[2em] max-w-md:text-center flex-[1] px-[1em] py-0"
      >
        <AnimatedTextCharacter text="歡迎來到大同教會課輔班" />
        <ImageView />
      </motion.div>

      <div className="mx-[1em] my-0 text-center">
        <motion.div {...imageLoadAnimationProps}>
          <picture className="block min-h-[250px]">
            <source
              srcSet="/assets/images/home-illustration.webp"
              media="(min-width: 600px)"
            />
            <img
              className="max-w-lg:max-w-[400px] mb-[1em] w-full max-w-[550px]"
              alt="Illustration of person reading a book"
              src="/assets/images/home-illustration-small.webp"
              width="550"
              height="466"
            />
          </picture>
        </motion.div>

        <p className="text-left text-[0.8em] italic">
          Illustration by{" "}
          <a
            href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Icons 8{" "}
          </a>{" "}
          from{" "}
          <a
            href="https://icons8.com/illustrations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ouch!
          </a>
        </p>
      </div>
    </div>
  );
}

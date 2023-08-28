import { motion } from "framer-motion";
import AnimatedTextCharacter from "~/components/AnimatedTextCharacter";
import { ImageView } from "~/components/ImageView";
import { containerVariants } from "~/config/animationConfig";

export const ImageContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-md:flex-[0 max-w-md:pb-[2em] max-w-md:text-center   flex-[1] items-center justify-center "
    >
      <AnimatedTextCharacter
        className="items-center justify-center"
        text="歡迎來到大同教會課輔班"
      />
      <ImageView />
    </motion.div>
  );
};

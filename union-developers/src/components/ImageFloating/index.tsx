import Image from "next/image";
import styles from "./index.module.scss";

type PropsImageFloating = {
  className: string;
};

const ImageFloating = ({ className }: PropsImageFloating) => {
  return (
    <Image
      src="https://media.graphassets.com/zRjyxnD5RyGdG8xVpll8"
      alt="Example Image"
      className={`${styles.floatingImage} ${className}`}
      width={635}
      height={635}
    />
  );
};

export default ImageFloating;

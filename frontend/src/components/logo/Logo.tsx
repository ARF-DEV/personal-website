import styles from "./Logo.module.css";

function Logo({
  logo,
  alt,
  size,
}: {
  logo: string;
  alt: string;
  size: number;
}) {
  return (
    <div className={styles.container}>
      <img
        src={logo}
        alt={alt}
        width={size}
        height={size}
        className={styles.logo}
      />
    </div>
  );
}

export default Logo;

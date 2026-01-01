import styles from "./Logo.module.css";

interface LogoProps {
  logo: string;
  alt: string;
  size: number;
}

function Logo({
  logo,
  alt,
  size,
}: LogoProps) {
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

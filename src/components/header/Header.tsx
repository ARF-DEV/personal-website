import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import websiteLogo from "../../assets/logo.png";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo logo={websiteLogo} alt="logo" size={80} />
      </div>
      <div className={styles.right}>
        <Button text="Home" />
        <Button text="About" />
      </div>
    </div>
  );
}

export default Header;

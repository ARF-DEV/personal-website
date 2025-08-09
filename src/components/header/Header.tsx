import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import websiteLogo from "../../assets/logo.png";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo logo={websiteLogo} alt="logo" size={80} />
      </div>
      <div className={styles.right}>
        <Button text="Home" onClick={() => navigate("/")} />
        <Button text="About" onClick={() => navigate("/about")} />
      </div>
    </div>
  );
}

export default Header;

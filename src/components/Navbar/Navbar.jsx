import { useState } from "react";
import { Link } from "react-router-dom";
import Rocket from "../../assets/Layer 1.svg"
import styles from "./navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={ styles.nav}>
        <div>
          <div className={styles.logo}>
            <img src={Rocket} alt="" />
          </div>
          {/* <div className="toggle">
            {show && <Modal show={show} setShow={setShow} />}
            <FontAwesomeIcon
              icon="bars"
              className={!show ? "open-menu-icon" : "hidden"}
              onClick={() => setShow(!show)}
            />
          </div> */}
        </div>
        <div className="menu">
          <ul className={styles['list-gap']}>
            <Link to="/home">
              Todo list
            </Link>
            <Link to="/services">
              Kaban
            </Link>
            <Link to="/about">
              Calendar
            </Link>
            <Link to="/favoris">
              Notes
            </Link>
          </ul>
        </div>
        <div className={styles['btn-link']}>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>

          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

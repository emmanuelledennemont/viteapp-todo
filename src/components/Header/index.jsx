import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from 'react-icons/ai';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo todo rocket" />
        <form className={styles.newTaskForm}>
          <input type="text" placeholder="Add a new task" />
          <button>
            Create
           <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;

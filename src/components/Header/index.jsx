import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import Navbar from "../Navbar";

const Header = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    if(!title){
    }else{
      event.preventDefault();
      handleAddTask(title);
      setTitle(""); 
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
    <Navbar />
      <header className={styles.header}>
        <img src={Logo} alt="Logo todo rocket" />
        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={onChangeTitle}
            value={title}
          />
          <button className={styles.ripple}>
            Create
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;

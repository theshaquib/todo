import React, { useState } from "react";
import MyModal from "./MyModal";
import "./Button.css"


const TodoHeading = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [todoHeadingText, setTodoHeadingText] = useState("My Todo");
  const changeHeading = (newHeading) => {
    setTodoHeadingText(newHeading)
  }

  const closeModal = ()=> setShowModal(false)

  return (
    <>
      <h1 onClick={() => setShowModal (true)}>{todoHeadingText}</h1>
      {showModal && <MyModal changeText={todoHeadingText} closeModal={closeModal} changeHeading={changeHeading}/>}
      
    </>
  );
};

export default TodoHeading;

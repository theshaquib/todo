import { useEffect ,useReducer,useState } from "react";
import "./App.js"
const MyModal = ({changeText, closeModal, changeHeading = () => {}}) => {
  const [todoHeadingText, setTodoHeadingText] = useState(changeText);



  useEffect(() => {
    document.body.style.overflowY = "hidden";
    
    return () => {
    document.body.style.overflowY = "scroll";
    }
  }, []);

    return(
   <>

      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
      <input type="text" placeholder="search"  value={changeText}/>
      <button >Set</button>
      <button onClick={closeModal}>
        Close
      </button></div>
      
    </>);
  };

  export default MyModal;
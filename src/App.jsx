import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyBsFybYGiXxxe026a4Gl9jeuwjUFn5TZqY",
  authDomain: "alien-nation-f4441.firebaseapp.com",
  projectId: "alien-nation-f4441",
  storageBucket: "alien-nation-f4441.appspot.com",
  messagingSenderId: "1092397660798",
  appId: "1:1092397660798:web:fe438ac2bf9abc47a3762f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {

  // const feelingBox = useRef();
  const [messageInput, setMessage] = useState("");

  const handleClick = () => {
    if (messageInput) {
      addDoc(collection(db, "feelings"), {
          message: messageInput,
          time: Timestamp
        });
  
      setMessage("");
    }
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleKeyPressed = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13){
      handleClick();
    }
  }

  return (
    <>
      <div className='feeling-container'>
          <textarea   
            className='feeling' name="message" id="message" cols="30" rows="10" 
            onChange={handleChange} 
            onKeyPress={handleKeyPressed} 
            value={messageInput}>
          </textarea>
      </div>
      <div>
          <button onClick={handleClick}>send</button>
      </div>
    </>
  )
}

export default App

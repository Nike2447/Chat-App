import React, { useState, useRef } from "react";
import { Auth } from "./components/auth";
import Cookies from "universal-cookie/cjs/Cookies";
import { Chat } from "./components/Chat";
import "./App.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState("");

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setroom(null);
  };

  if (!isAuth) {
    return (
      <div className="bg-slate-400">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <>
      <div className="flex">
        {room ? (
          <Chat room={room} />
        ) : (
          <div className="room items-center">
            <label>Enter Room name : </label>
            <input ref={roomInputRef} />
            <button onClick={() => setroom(roomInputRef.current.value)}>
              Enter chat
            </button>
          </div>
        )}
      </div>
      <div className="sign-out ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
          onClick={signUserOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default App;

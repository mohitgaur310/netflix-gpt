import React, { useEffect } from "react";
import { LOGO, USER_LOGO } from "../utils/Constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { updateToggleSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toggle= useSelector((store)=>store?.GPT?.toggleSearch)
  console.log(toggle);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch =()=>{
    dispatch(updateToggleSearch('turn'))
  }
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between  ">
      <img className="w-44 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <button className=" bg-red-700 text-white py-2 px-4 mx-4 rounded-lg "
          onClick={handleGptSearch}>
            GPT Search
          </button>
          <img className="w-12 h-12 mx-4" alt="user-logo" src={USER_LOGO} />
          <button
            onClick={signOutHandler}
            className="font-bold text-white bg-red-700 rounded-lg px-5 cursor-pointer hover:bg-opacity-80"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

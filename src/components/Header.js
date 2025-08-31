import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_PROFILE_IMAGE_PLACEHOLDER } from "../utils/constants";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid,
          email,
          displayName
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="absolute px-8 py-8 bg-gradient-to-b from-black w-full flex justify-between items-center z-10">
      <img src="/logo.svg" alt="Netflix Logo" width="148" height="40" />

      {user && (
        <div className="relative flex items-center">
          <span className="mr-2">{user.displayName}</span>
          <img
            src={USER_PROFILE_IMAGE_PLACEHOLDER}
            alt="Profile"
            className="w-8 h-8 rounded cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute top-full right-0 w-48 bg-black bg-opacity-90 rounded-md shadow-lg border border-gray-700">
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
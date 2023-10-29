import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObject, setUserObject] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObject(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div className="font">
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObject={userObject} />
      ) : (
        "Initializing..."
      )}
      <footer className="footer">
        &copy; {new Date().getFullYear()} 2-7누리집
        <br />
        <span className="license">
          이 페이지에는 네이버에서 제공한 나눔글꼴이 적용되어 있습니다.
        </span>
      </footer>
    </div>
  );
};

export default App;

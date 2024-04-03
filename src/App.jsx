import { BellIcon } from "./assets/logo/Logo";
import UserData from "./components/UserData";
import { useSelector } from "react-redux";

function App() {
  const names = useSelector((state) => {
    return state.name;
  });

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Hello to world there are some people</h1>
        <UserData />

        <h1>
          {names.map((name, id) => {
            return (
              <p key={id}>
                {name} <BellIcon />
              </p>
            );
          })}
        </h1>
      </div>
    </>
  );
}

export default App;

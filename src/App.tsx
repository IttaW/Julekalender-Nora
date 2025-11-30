import "./App.css";
import { Kalender } from "./kalender/calendarComponents/Kalender.tsx";
import styles from "./App.module.scss";
import nissen from "./assets/tst.png";

export type LukeType = {
  dato: string;
  luke: string;
  lukenummer: number;
  aktiv: boolean;
};

function App() {
  return (
    <>
      <div className={"imgContainer"}>
        {Array(15)
          .fill(undefined)
          .map((_, index) => (
            <img
              alt={`nissen${index}`}
              src={nissen}
              className={`img${index + 1}`}
            />
          ))}
      </div>

      <div className={styles.container}>
        <h1>Nora sin julekalender!</h1>
        <Kalender />
      </div>
    </>
  );
}

export default App;

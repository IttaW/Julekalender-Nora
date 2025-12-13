import bilder from "../../Bilder.ts";
import { LukeType } from "../../App.tsx";
import styles from "./kalender.module.scss";
import cn from "classnames";
import { useState } from "react";
import nissen from "../../assets/tst.png";
import grinchen from "../../assets/The_Grinch_Monster.png";

type Lukeprops = {
  luke: LukeType;
  onClick: (luke: LukeType) => void;
};

export const Luke = ({ luke, onClick }: Lukeprops) => {
  const [rist, setRist] = useState<boolean>(false);
  luke.aktiv && console.log(luke.dato, luke.aktiv);

  const handleOnClick = (luke: LukeType) => {
    if (erDatoMindreEllerLikIdag(luke.dato) || luke.forceOpen) {
      onClick(luke);
    } else {
      setRist(true);
      const timeout1 = setTimeout(() => {
        setRist(false);
      }, 500);
      return () => {
        clearTimeout(timeout1);
      };
    }
  };
  const handleLukeBilde = (luke: LukeType) => {
    if (erDatoMindreEllerLikIdag(luke.dato) || luke.forceOpen) {
      return bilder[luke.lukenummer - 1];
    } else {
      return nissen;
    }
  };
  const erDatoMindreEllerLikIdag = (dato: string): boolean => {
    const today = new Date();
    today.setHours(today.getHours() + 1);
    return today.toISOString() >= dato;
  };

  return (
    <div
      className={cn(
        styles.luke,
        luke.aktiv && styles.cardFlip,
        rist && styles.rist
      )}
      onClick={() => handleOnClick(luke)}
    >
      {/*Front*/}
      <div className={styles.front}>
        {rist ? (
          <img className={styles.grinch} alt={"grinch"} src={grinchen} />
        ) : (
          <img alt={"lukebilde"} src={handleLukeBilde(luke)} />
        )}
        <p>{luke.lukenummer}. DESEMBER</p>
      </div>
      {/*Back*/}
      <div className={styles.back}>
        <img alt={"lukebilde"} src={handleLukeBilde(luke)} />
        <div>
          <h2>{luke.lukenummer}. desember</h2>
          <p>{erDatoMindreEllerLikIdag(luke.dato) || luke.forceOpen ? luke.luke : ""}</p>
        </div>
      </div>
    </div>
  );
};

import { Luke } from "./Luke.tsx";
import { LukeType } from "../../App.tsx";
import { useEffect, useState } from "react";
import _luker from "../../assets/luker.json";
import styles from "./kalender.module.scss";

export const Kalender = () => {
  const [luker, setLuker] = useState<LukeType[]>([]);
  useEffect(() => {
    const luker = _luker as LukeType[];
    const shuffled = luker
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setLuker(shuffled);
  }, []);

  const aktiverEllerDeaktiverLuke = (value: LukeType): LukeType[] => {
    return luker.map((luke: LukeType) => {
      if (luke.dato === value.dato) {
        return { ...luke, aktiv: !luke.aktiv };
      }
      return luke;
    });
  };

  return (
    <div className={styles.row}>
          {luker.map((value) => (
            <Luke
              key={value.dato}
              luke={value}
              onClick={() => setLuker(aktiverEllerDeaktiverLuke(value))}
            />
          ))}
    </div>
  );
};

import { StarIcon } from "@heroicons/react/16/solid";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { NbaPageInterface } from "../types";
import styles from "./NbaPage.module.css";
import { DataEntryInterface, playerData } from "../data";

const NbaPage = ({ text }: NbaPageInterface) => {
  const weblink = "https://www.nba.com/stats/player/";
  return (
    <>
      <div className={styles["nav-container"]}>
        <NavBar text={text} href="/" />
      </div>
      <div className={styles.cardContainer}>
        {playerData.map((player: DataEntryInterface) => (
          <Card
            key={player.id}
            body={player.team}
            name={player.name}
            image={player.name}
            id={player.id}
            badge={{
              text: "NBA",
              filled: false,
            }}
            subtitle="?"
            btn={{
              text: "STATS",
              href: `${weblink}${player.id}`,
              type: "primary",
              filled: true,
              icon: <StarIcon />,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default NbaPage;

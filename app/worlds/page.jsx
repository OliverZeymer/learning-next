import { World } from "../../components/World";
import { exploreWorlds } from "../../constants";
import styles from "../../styles";
const WorldsPage = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${styles.innerWidth} ${styles.paddings}`}>
      {exploreWorlds.map((world, index) => (
        <World key={index} world={world} index={index} />
      ))}
    </div>
  );
};
export default WorldsPage;

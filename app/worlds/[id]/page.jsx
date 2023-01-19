import { exploreWorlds } from "../../../constants";
import styles from "../../../styles";
const WorldPage = ({ params }) => {
  const world = exploreWorlds.find((world) => world.id === params.id);
  return (
    <div>
      {world ? (
        <div className={`flex flex-col gap-6 ${styles.innerWidth} ${styles.paddings}`}>
          <h1 className="text-4xl lg:text-6xl text-white">{world.title}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl">{world.description}</p>
          <img src={world.imgUrl} className="rounded-3xl" alt="" />
          <button
            type="button"
            class="py-4 tracking-wider font-bold uppercase text-white px-10 w-fit self-center mt-6 text-xl bg-gradient-to-r from-indigo-700 to-violet-700 hover:scale-110 transition-all rounded-full">
            explore world
          </button>
        </div>
      ) : (
        <div>
          <h1>Error...</h1>
        </div>
      )}
    </div>
  );
};
export default WorldPage;

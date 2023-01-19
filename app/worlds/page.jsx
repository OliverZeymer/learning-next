import Link from "next/link";
import { exploreWorlds } from "../../constants";
import styles from "../../styles";
const WorldsPage = async () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${styles.innerWidth} ${styles.paddings}`}>
      {exploreWorlds.map((world) => (
        <Link href={`/worlds/${world.id}`}>
          <div className="flex flex-col justify-end grid-rows-2 gap-6 hover:scale-105 cursor-pointer transition-transform">
            <h1 className="text-3xl md:text-5xl xl:text-6xl text-white">{world.title}</h1>
            <img src={world.imgUrl} className="max-w-4xl w-full md:rounded-2xl md:h-[250px]" alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
};
export default WorldsPage;

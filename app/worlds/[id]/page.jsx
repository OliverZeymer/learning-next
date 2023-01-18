import { exploreWorlds } from "../../../constants";

const WorldPage = async (worldId) => {
  let id = worldId.params.id;
  const world = exploreWorlds.find((world) => world.id === id);
  return (
    <div>
      {world ? (
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl text-white">{world.title}</h1>
          <p>{world.description}</p>
          <img src={world.imgUrl} />
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

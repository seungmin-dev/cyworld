import Layout from "@/components/layout";

const Game = () => {
  return (
    <Layout>
      <div className="mb-3 border-b-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="text-[#55B2D4] font-bold mb-1 pr-3">GAME</h4>
        <p className="font-light text-xs flex-grow">TODAY CHOICE</p>
      </div>
    </Layout>
  );
};

export default Game;

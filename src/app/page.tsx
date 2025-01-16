import dynamic from "next/dynamic";

const StockTable = dynamic(() => import("../components/StockTable"), {
  ssr: true,
});

const Home = () => {
  return <StockTable />;
};

export default Home;

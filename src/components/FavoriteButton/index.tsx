/* eslint-disable @typescript-eslint/no-explicit-any */

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import { StockProps } from "@/types";

const FavoriteButton = (e: any) => {
  // Toggle Favorite Button
  const handleToggleFavorite = () => {
    e.api.applyTransaction({
      update: [{ ...e.data, favorite: !e.data.favorite }],
    });
    const allData: StockProps[] = [];
    e.api.forEachNode((node: { data: StockProps }) => {
      allData.push(node.data);
    });
    localStorage.setItem("StocksData", JSON.stringify(allData));
  };

  return (
    <button onClick={handleToggleFavorite}>
      {e.data.favorite ? (
        <MdFavorite className='text-red-600' />
      ) : (
        <MdFavoriteBorder />
      )}
    </button>
  );
};

export default FavoriteButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const FavoriteButton = (e: any) => {
  // Toggle Favorite Button
  const handleToggleFavorite = () => {
    e.api.applyTransaction({
      update: [{ ...e.data, favorite: !e.data.favorite }],
    });
  };
  return (
    <button onClick={handleToggleFavorite}>
      {e.data.favorite ? <MdFavorite className="text-red-600" /> : <MdFavoriteBorder />}
    </button>
  );
};

export default FavoriteButton;

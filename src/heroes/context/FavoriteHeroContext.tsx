import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContextProps {
  //State
  favorites: Hero[];
  favoriteCount: number;

  //Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext<FavoriteHeroContextProps>(
  {} as FavoriteHeroContextProps,
);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const storedFavorites = localStorage.getItem("favoriteHeroes");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

  const toogleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);
    if (heroExist) {
      setFavorites((prev) => prev.filter((h) => h.id !== hero.id));
    } else {
      setFavorites((prev) => [...prev, hero]);
    }
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem("favoriteHeroes", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        isFavorite: (hero: Hero) => favorites.some((h) => h.id === hero.id),
        toggleFavorite: toogleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};

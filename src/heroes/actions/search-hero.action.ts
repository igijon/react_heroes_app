import { heroAPI } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

const VITE_API_URL = import.meta.env.VITE_API_URL;

interface Option {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

export const searchHeroesAction = (options: Option = {}) => {
  const { name, team, category, universe, status, strength } = options;
  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }
  const { data } = await heroAPI.get<Hero[]>("/search", {
    params: {
        name, 
        team,
        category,
        universe, 
        status,
        strength
    }
  });

  return data.map(hero => ({
    
  })
};

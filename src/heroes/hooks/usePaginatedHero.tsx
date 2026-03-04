import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginatedHero = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["heroes", { page, limit }], //Espacio de memoria donde almacenamos la petición
    queryFn: () => getHeroesByPageAction(+page, +limit), //Función que realiza la petición
    staleTime: 1000 * 60 * 5, // (5 mins) Tiempo durante el cual los datos se consideran frescos (no se vuelven a pedir y los coge de la caché)
  });
}

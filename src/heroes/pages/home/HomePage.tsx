import { Heart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  const { data } = useQuery({
    queryKey: ["heroes"], //Espacio de memoria donde almacenamos la petición
    queryFn: () => getHeroesByPageAction(), //Función que realiza la petición
    staleTime: 1000*60*5// (5 mins) Tiempo durante el cual los datos se consideran frescos (no se vuelven a pedir y los coge de la caché)
  });
  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, []);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de SuperHéroes"
        description="Descubre, explora y administra super héroes"
      />

      <CustomBreadcrumbs currentPage="Super Héroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            onClick={() => setActiveTab("favorites")}
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab("villains")}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Character Grid */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Character Grid */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Character Grid */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="villains">
          {/* Character Grid */}
          <HeroGrid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={8} />
    </>
  );
};

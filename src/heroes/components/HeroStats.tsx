import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroSummary } from "../hooks/useHeroSummary";

export const HeroStats = () => {

  const { data: summary  } = useHeroSummary();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total Personajes"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes ?? 0}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount ?? 0} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount ?? 0} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        {/*TODO: Tenemos que calcular este valor*/}
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">Strength: 10/10</p>
      </HeroStatCard>

      <HeroStatCard
        title="Strongest"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero?.alias ?? "N/A"}</div>
        <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero?.strength ?? 0}/10</p>
      </HeroStatCard>
      <HeroStatCard
        title="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero?.alias ?? "N/A"}</div>
        <p className="text-xs text-muted-foreground">Intelligence: {summary?.smartestHero?.intelligence ?? 0}/10</p>
      </HeroStatCard>
    </div>
  );
};

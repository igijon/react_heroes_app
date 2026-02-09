import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes"
      />
      {/*Stats Dashboard*/}
      <HeroStats />
      {/* Filter and search */}
      <SearchControls/>
    </>
  );
};

export default SearchPage;

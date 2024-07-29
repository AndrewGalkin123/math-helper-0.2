import EventList from "../../../components/ArticlesPageComponents/HistoricalArticles/EventList";
import { Magazines } from "../../../components/ArticlesPageComponents/Magazines/Magazines";
import MathematicsInDifferentAreas from "../../../components/ArticlesPageComponents/MathematicsInDifferentAreas/MathematicsInDifferentAreas";
import { RecentDiscoveries } from "../../../components/ArticlesPageComponents/RecentDiscoveries/RecentDiscoveries";

export default function Articles() {
  return (
    <main>
      <Magazines />
      <EventList />
      <RecentDiscoveries />
      <MathematicsInDifferentAreas />
    </main>
  );
}

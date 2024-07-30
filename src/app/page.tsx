import { AdditionalInfo } from "../../components/HomePageComponents/AdditionalInfo/AdditionalInfo";
import { Introduction } from "../../components/HomePageComponents/Introduction/Introduction";
import { Themes } from "../../components/HomePageComponents/Themes/Themes";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Introduction />
        <AdditionalInfo />
      </div>
      <Themes />
    </main>
  );
}

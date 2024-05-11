import { AdditionalInfo } from "../../components/HomePageComponents/AdditionalInfo/AdditionalInfo";
import { Introduction } from "../../components/HomePageComponents/Introduction/Introduction";
import { Themes } from "../../components/HomePageComponents/Themes/Themes";

export default function Home() {
  return (
    <main style={{ width: "80%" }}>
      <div style={{ display: "flex" }}>
        <Introduction />
        <AdditionalInfo />
      </div>
      <Themes />
    </main>
  );
}

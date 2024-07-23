import { FAQ } from "../../../components/FAQPage/FAQ";
import items from "./FAQ-Items";

export default function FrequentlyAskedQuestions() {
  return (
    <main>
      <FAQ title="Часто задаваемые вопросы (FAQ)" items={items} />
    </main>
  );
}

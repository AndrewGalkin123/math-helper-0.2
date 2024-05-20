import styles from "./RecentDiscoveries.module.css";
import { RecentDiscovery } from "./RecentDiscovery";

interface Discovery {
  title: string;
  description: string;
}

const discoveries: Discovery[] = [
  {
    title: "Решение задачи Фейнмана о спринклере",
    description:
      "Исследовательская группа решила давнюю задачу Фейнмана о спринклере, касающуюся движения спринклера при обратном потоке воды. Новые результаты показывают, что спринклер ведет себя иначе, когда засасывает воду, по сравнению с моментом, когда её выпускает. Это открытие углубляет наше понимание динамики жидкостей и вращательного движения.",
  },
  {
    title: "Доказательство гипотезы Поля",
    description: "Описание гипотезы Поля и ее доказательства.",
  },
  {
    title: "Девятое число Дедекинда",
    description: "Описание девятого числа Дедекинда и его значимости.",
  },
  {
    title: "Решение задачи Рамсея",
    description: "Описание решения задачи Рамсея и его последствий.",
  },
  {
    title: "Использование ИИ в математике",
    description:
      "Примеры использования ИИ в решении сложных математических задач.",
  },
];

const RecentDiscoveries: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Недавние открытия в математике</h2>
      <ul className={styles.list}>
        {discoveries.map((item) => {
          return (
            <RecentDiscovery
              key={item.title}
              styles={styles}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export { RecentDiscoveries };

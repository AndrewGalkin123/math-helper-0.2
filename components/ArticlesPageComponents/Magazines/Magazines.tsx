import "./Magazines.css";
import { Magazine } from "./Magazine";

const magazines = [
  {
    title: "Journal of the American Mathematical Society",
    src: "americanMathSociety.png",
    description: "asd",
  },
  {
    title: "Annals of Mathematics",
    src: "https://annals.math.princeton.edu/wp-content/uploads/Annals_cover.01_03_24.jpg",
    description: "asd",
  },
  {
    title: "Journal of Differential Geometry",
    src: "differentialGeometry.png",
    description: "asd",
  },
  {
    title: "Journal of Algebra",
    src: "algebraJournal.png",
    description: "asd",
  },
];

const Magazines: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1>Обзоры научных журналов</h1>
      <div className="magazines">
        {magazines.map((item, index) => {
          return (
            <Magazine
              key={index}
              title={item.title}
              src={item.src}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Magazines };

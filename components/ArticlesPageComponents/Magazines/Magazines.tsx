import { Magazine } from "./Magazine";

const Magazines: React.FC = () => {
  return (
    <div className="magazines">
      <Magazine
        title="Journal of the American Mathematical Society"
        src="americanMathSocietz.png"
        description="dsa"
      />
      <Magazine />
      <Magazine />
      <Magazine />
    </div>
  );
};

export { Magazines };

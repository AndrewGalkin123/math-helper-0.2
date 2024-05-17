import { StaticImageData } from "next/image";

interface MagazineProps {
  title: string;
  src: string | undefined;
  description: string;
}

const Magazine: React.FC<MagazineProps> = ({ title, src, description }) => {
  return (
    <div className="magazine">
      <img src={src}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export { Magazine };

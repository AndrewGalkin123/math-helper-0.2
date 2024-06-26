interface MagazineProps {
  title: string;
  src: string | undefined;
  description: string;
}

const Magazine: React.FC<MagazineProps> = ({ title, src, description }) => {
  return (
    <div className="magazine">
      <img src={src}></img>
      <h2 className="magazine-title">{title}</h2>
      <p className="magazine-description">{description}</p>
    </div>
  );
};

export { Magazine };

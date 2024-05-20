interface RecentDiscoveryProps {
  styles: { [key: string]: string };
  title: string;
  description: string;
}

const RecentDiscovery: React.FC<RecentDiscoveryProps> = ({
  styles,
  title,
  description,
}) => {
  return (
    <li className={styles.listItem}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export { RecentDiscovery };

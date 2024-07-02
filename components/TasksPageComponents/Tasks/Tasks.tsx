interface TasksProps {
  theme: string;
}

const Tasks: React.FC<TasksProps> = ({ theme }) => {
  return (
    <div style={{ width: "75%" }}>
      <h1>Тест на тему "{theme}"</h1>
      <div className="tasks"></div>
    </div>
  );
};

export { Tasks };

import "./Team.css";

export default function Team() {
  return (
    <main className="main">
      <div className="member-container">
        <div className="member">
          <img src="панда.jpg" alt="Developer Name" className="image" />
          <h2 className="name">Developer Name</h2>
          <p className="role">Lead Developer</p>
          <p className="description">
            Experienced in full-stack development and passionate about creating
            innovative solutions.
          </p>
        </div>
      </div>
    </main>
  );
}

export function NavBar({ username }) {
  return (
    <div className="navbar">
      <div className="headerComponent">
        <h3>Url Shortner</h3>
      </div>
      <div className="profile">
        <span className="profileName">{username}</span>
        <span className="material-symbols-outlined profilePicture">person</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
    <div className="w-64 h-full bg-base-200 p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul className="menu">
        <li>
          <a to="/" className="menu-item">Dashboard</a>
        </li>
        <li>
          <a to="/users" className="menu-item">Users</a>
        </li>
        <li>
          <a to="/settings" className="menu-item">Settings</a>
        </li>
        <li>
          <a to="/reports" className="menu-item">Reports</a>
        </li>
      </ul>
    </div>
    </>
  );
}
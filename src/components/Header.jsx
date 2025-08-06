export default function Header() {
  return (
    <>
    <header className="bg-base-100 shadow">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-primary">Dashboard</a></li>
            <li><a href="#" className="text-primary">Users</a></li>
            <li><a href="#" className="text-primary">Settings</a></li>
            <li><a href="#" className="text-primary">Logout</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}

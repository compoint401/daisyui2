import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
     <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p>Welcome to the admin panel. Here you can manage your application.</p>
        </main>
      </div>
      <Footer />
    </>
  );
}

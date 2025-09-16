import './App.css';
import Navbar from '@/layouts/Navbar';
import Sidebar from '@/layouts/Sidebar';
import Topbar from '@/layouts/Topbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Right side: Topbar + Main content */}
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-6 flex-1">
            <h1 className="text-2xl font-bold">Hello World</h1>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

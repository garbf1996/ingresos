import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardContent from '../components/DashboardContent';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
}

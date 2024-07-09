export default function Topbar() {
    return (
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Dashboard</div>
        <div className="flex items-center">
          <button className="mr-4">🔔</button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    );
  }
  
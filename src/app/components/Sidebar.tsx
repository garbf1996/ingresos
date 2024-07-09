export default function Sidebar() {
    return (
      <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <div className="text-2xl font-bold mb-8">Cleopatra</div>
        <nav>
          <ul>
            <li className="mb-4"><a href="#">Analytics Dashboard</a></li>
            <li className="mb-4"><a href="#">Ecommerce Dashboard</a></li>
            <li className="mb-4"><a href="#">Email</a></li>
            <li className="mb-4"><a href="#">Chat</a></li>
            <li className="mb-4"><a href="#">Todo</a></li>
            <li className="mb-4"><a href="#">Calendar</a></li>
            <li className="mb-4"><a href="#">Invoice</a></li>
            <li className="mb-4"><a href="#">File Manager</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
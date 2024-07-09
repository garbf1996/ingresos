import Image from 'next/image';
import SalesOverview from './SalesOverview';

export default function DashboardContent() {
  return (
    <div className="p-6 flex-1">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-2xl">3685</div>
          <div className="text-gray-500">Items Sales</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-2xl">6756</div>
          <div className="text-gray-500">New Orders</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-2xl">9685</div>
          <div className="text-gray-500">Total Products</div>
        </div>
      </div>
      <div className="bg-teal-500 p-6 rounded-lg text-white mb-6">
        <h2 className="text-xl mb-2">Good Job, Mohamed!</h2>
        <ul>
          <li>Finish Dashboard Design</li>
          <li>Fix Issue #74</li>
          <li>Publish Version 1.0.6</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg mb-2">Sales Overview</h3>
          <p className="text-4xl">5,337</p>
          <p className="text-green-500">79% More Sales In Comparison To Last Month.</p>
          <p className="text-red-500">83% Revenue Per Sale In Comparison To Last Month.</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg mb-2">Page View</h3>
          <p className="text-2xl">2722K</p>
        </div>
      </div>
     
    </div>
  );
}

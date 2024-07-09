import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
  { name: 'Aug', sales: 2000 },
  { name: 'Sep', sales: 2780 },
  { name: 'Oct', sales: 1890 },
  { name: 'Nov', sales: 2390 },
  { name: 'Dec', sales: 3490 },
];

export default function SalesOverview() {
  return (
    <div className="bg-white p-6 shadow rounded-lg mb-6">
      <h2 className="text-xl mb-4 font-semibold">Sales Overview</h2>
      <div className="text-4xl font-bold mb-2">5,337</div>
      <p className="text-gray-500 mb-4">Sales This Month</p>
      <div className="flex items-center mb-4">
        <div className="flex items-center text-green-500 mr-6">
          <span className="bg-green-100 p-1 rounded-full mr-2">▲</span>
          46% More Sales In Comparison To Last Month.
        </div>
        <div className="flex items-center text-red-500">
          <span className="bg-red-100 p-1 rounded-full mr-2">▼</span>
          6% Revenue Per Sale In Comparison To Last Month.
        </div>
      </div>
      <button className="bg-teal-500 text-white py-2 px-4 rounded">View Details</button>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4FD1C5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Netflix GPT
        </h1>
        <p className="text-lg text-green-800">
          A fresh React app with Tailwind CSS
        </p>
        <div className="mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

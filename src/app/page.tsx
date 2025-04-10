import IndiaMap from './components/IndiaMap';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-4xl font-bold text-sky-400 text-center">
        Explore Indian States
      </h1>
      <p className="text-gray-300 text-lg mt-2 mb-4 text-center">
        Click on a state to learn about its rich culture and heritage.
      </p>
      <IndiaMap />
    </main>
  );
}

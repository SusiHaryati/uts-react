export default function Home() {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-gradient-to-r from-blue-400 to-pink-400 rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">
            Welcome to Our Movie Site
          </h1>
          <div className="text-gray-200 text-lg leading-relaxed mb-6">
            <p className="mb-4">
              Discover the latest trailers for upcoming movies. Stay tuned for the most exciting releases and get a glimpse of whats to come in the world of cinema.
            </p>
          </div>
          <div className="flex justify-center">
          <img
              src="./home-utama.jpeg"
              alt="Movie Utama"
              className="rounded-lg shadow-lg w-150"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="./home1.jpeg"
              alt="Movie 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./hom2.jpeg"
              alt="Movie 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./home.jpeg"
              alt="Movie 3"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  
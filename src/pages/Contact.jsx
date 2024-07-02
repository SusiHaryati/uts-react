export default function Contact() {
    return (
      <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Informasi Diri
            </h1>
            <div className="text-gray-700 leading-relaxed mb-8 text-center">
              <p className="mb-4">
                <span className="font-semibold">Nama:</span> Susi Haryati Hutasuhut
              </p>
              <p className="mb-4">
                <span className="font-semibold">Tempat dan Tanggal Lahir:</span> 13 April 2024
              </p>
              <p className="mb-4">
                <span className="font-semibold">Pelatihan:</span> React
              </p>
              <p className="mb-4">
                <span className="font-semibold">Instruktur:</span> Arya Segara
              </p>
            </div>
            <div className="text-gray-700 leading-relaxed mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kesan dan Pesan Pelatihan</h2>
              <p className="mb-4">
                <span className="font-semibold">Kesan:</span> Pelatihan ini sangat membantu saya dalam memahami dasar-dasar React dengan baik. Metode pengajaran yang digunakan oleh instruktur sangat interaktif dan mudah dipahami.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Pesan:</span> Semoga pelatihan ini dapat terus ditingkatkan dan diberikan kepada lebih banyak orang yang ingin belajar React. Terima kasih kepada instruktur Arya Segara atas bimbingannya yang luar biasa.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
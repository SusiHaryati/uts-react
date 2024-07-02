import { Trash2, Pencil, BadgeInfo, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const listFilm = [
  {
    id: 1,
    nameFilm: "Dilan 1990",
    image: "./dilan.jpg",
    tahun: "2018",
    genre: "romans",
    durasi: "2 jam",
    sinopsis:
      'Dilan 1990" adalah film drama romantis Indonesia yang diadaptasi dari novel populer karya Pidi Baiq. Berlatar belakang di Bandung pada tahun 1990, film ini mengisahkan tentang kisah cinta remaja.',
  },
  {
    id: 2,
    nameFilm: "Ngeri ngeri sedap",
    image: "./ngeri.jpeg",
    tahun: "2023",
    genre: "family dan komedi",
    durasi: "2 jam 20 menit",
    sinopsis:
      'Ngeri-Ngeri Sedap" adalah film komedi-drama Indonesia yang disutradarai oleh Bene Dion Rajagukguk. Film ini bercerita tentang keluarga Batak yang menghadapi konflik internal antara orang tua dan anak-anak mereka.',
  },
  {
    id: 3,
    nameFilm: "Avatar 2",
    image: "./avatar.jpeg",
    tahun: "2024",
    genre: "kartun animasi",
    durasi: "2 jam 57 menit",
    sinopsis:
      'Avatar 2," berjudul "Avatar: The Way of Water," adalah sekuel dari film "Avatar" yang disutradarai oleh James Cameron. Film ini melanjutkan kisah Jake Sully (diperankan oleh Sam Worthington) dan Neytiri (diperankan oleh Zoe Saldana) di dunia Pandora, yang kini menghadapi ancaman baru.',
  },
];

const savedFilm = localStorage.getItem("films");

export default function Film() {
  const [films, setFilms] = useState(
    savedFilm ? JSON.parse(savedFilm) : listFilm
  );

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [updateFilm, setUpdateFilm] = useState(null);
  const [newFilm, setNewFilm] = useState({
    nameFilm: "",
    tahun: "",
    genre: "",
    durasi: "",
    sinopsis: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [likes, setLikes] = useState({});

  function handleDelete(f) {
    if (confirm("Apakah kamu yakin untuk menghapus film ini?")) {
      setFilms(films.filter((item) => item.id !== f.id));
    }
  }

  function handleUpdate() {
    setFilms(
      films.map((item) => (item.id === updateFilm.id ? updateFilm : item))
    );
    setUpdateFilm(null);
  }

  function handleAdd() {
    setFilms([...films, { id: films.length + 1, ...newFilm }]);
    setNewFilm({
      nameFilm: "",
      tahun: "",
      genre: "",
      durasi: "",
      sinopsis: "",
    });
    setShowAddForm(false);
  }

  const sortedFilms = films
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter((f) => {
      return f.nameFilm.toLowerCase().includes(search.toLowerCase());
    });

  const handleClick = (item) => {
    alert(
      `Judul : ${item.nameFilm}\n Genre : ${item.genre}\n Tahun Rilis: ${item.tahun}\n Durasi: ${item.durasi}\n Sinopsis: ${item.sinopsis}`
    );
  };

  const handleLike = (id) => {
    setLikes({ ...likes, [id]: !likes[id] });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Koleksi Film
      </h1>

      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="sortby" className="font-medium text-gray-800">
          Urutkan berdasarkan:
        </label>
        <select
          id="sortby"
          className="border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="id">Normal</option>
          <option value="nameFilm">Name</option>
          <option value="tahun">Tahun</option>
        </select>

        <select
          className="ml-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <input
        type="text"
        placeholder="Cari film..."
        className="block w-1/2 p-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedFilms.map((f) => (
          <div key={f.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-pink-600">{f.nameFilm}</h2>
            <img
              src={f.image}
              alt={f.nameFilm}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <p className="text-gray-600">Tahun Rilis {f.tahun}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setUpdateFilm(f)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                >
                  <Pencil />
                </button>
                <button
                  onClick={() => handleDelete(f)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded"
                >
                  <Trash2 />
                </button>
                <button
                  onClick={() => handleClick(f)}
                  className="p-2 text-black-600 hover:bg-black-100 rounded"
                >
                  <BadgeInfo />
                </button>
                <button
                  onClick={() => handleLike(f.id)}
                  className={`p-2 ${
                    likes[f.id] ? "text-red-600" : "text-gray-600"
                  } hover:bg-red-100 rounded`}
                >
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {updateFilm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md mx-auto z-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
              className="mt-4 p-4 bg-white shadow rounded-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-pink-600">
                Edit Film
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="updateJudul"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Film
                </label>
                <input
                  type="text"
                  id="updateJudul"
                  value={updateFilm.nameFilm}
                  onChange={(e) =>
                    setUpdateFilm({
                      ...updateFilm,
                      nameFilm: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="updateTahun"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tahun
                </label>
                <input
                  type="text"
                  id="updateTahun"
                  value={updateFilm.tahun}
                  onChange={(e) =>
                    setUpdateFilm({
                      ...updateFilm,
                      tahun: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="updateGenre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Genre
                </label>
                <input
                  type="text"
                  id="updateGenre"
                  value={updateFilm.genre}
                  onChange={(e) =>
                    setUpdateFilm({
                      ...updateFilm,
                      genre: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="updateDurasi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Durasi
                </label>
                <input
                  type="text"
                  id="updateDurasi"
                  value={updateFilm.durasi}
                  onChange={(e) =>
                    setUpdateFilm({
                      ...updateFilm,
                      durasi: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="updateSinopsis"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sinopsis
                </label>
                <textarea
                  id="updateSinopsis"
                  value={updateFilm.sinopsis}
                  onChange={(e) =>
                    setUpdateFilm({
                      ...updateFilm,
                      sinopsis: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

                  <div className="mb-4">
                <label
                  htmlFor="updateImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gambar
                </label>
                <input
                  type="text"
                  id="image"
                  className="block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                  value={updateFilm.image}
                  onChange={(e) =>
                    setUpdateFilm({ ...updateFilm, image: e.target.value })
                  }
                  required
                />
              </div>

              
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2"
                  onClick={() => setUpdateFilm(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md mx-auto z-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdd();
              }}
              className="mt-4 p-4 bg-white shadow rounded-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-pink-600">
                Tambah Film Baru
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="addJudul"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Film
                </label>
                <input
                  type="text"
                  id="addJudul"
                  value={newFilm.nameFilm}
                  onChange={(e) =>
                    setNewFilm({
                      ...newFilm,
                      nameFilm: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="addTahun"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tahun
                </label>
                <input
                  type="text"
                  id="addTahun"
                  value={newFilm.tahun}
                  onChange={(e) =>
                    setNewFilm({
                      ...newFilm,
                      tahun: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="addGenre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Genre
                </label>
                <input
                  type="text"
                  id="addGenre"
                  value={newFilm.genre}
                  onChange={(e) =>
                    setNewFilm({
                      ...newFilm,
                      genre: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="addDurasi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Durasi
                </label>
                <input
                  type="text"
                  id="addDurasi"
                  value={newFilm.durasi}
                  onChange={(e) =>
                    setNewFilm({
                      ...newFilm,
                      durasi: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="addSinopsis"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sinopsis
                </label>
                <textarea
                  id="addSinopsis"
                  value={newFilm.sinopsis}
                  onChange={(e) =>
                    setNewFilm({
                      ...newFilm,
                      sinopsis: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="newImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gambar
                </label>
                <input
                  type="text"
                  id="image"
                  className="block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                  value={newFilm.image}
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, image: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => setShowAddForm(true)}
      >
        Tambah Film
      </button>
    </div>
  );
}

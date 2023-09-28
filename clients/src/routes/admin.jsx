import Sidebar from "../components/"

export default function Admin() {
  return (
    <div className="flex">
        <div className="w-56 min-h-screen bg-gray-700">
            <Sidebar />
        </div>
        <div>
            creer une liste
            <form>
                <input type="text" placeholder="ajouter un nom de liste" />
                <button>creer</button>
            </form>
        </div>
    </div>
  )
}

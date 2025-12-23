import { useUsers } from "../context/user-context";

export default function Users() {
  const { users, deleteUser } = useUsers();

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Users (Admin Only)</h2>

      <div className="grid gap-2 md:grid-cols-3">
        {users.map(user => (
          <div key={user.id} className="border p-2">
            <p>{user.email}</p>
            <p className="text-sm">{user.role}</p>
            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

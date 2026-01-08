import { useState } from "react";
import { useFetch, usePost, usePut, useDelete } from "../hooks/useAxios";
import { Button } from "../components/base/button";
import { Input } from "../components/base/input";
import { SimpleCard } from "../components/base/card";
import { IconCard } from "../components/icon-card";
import { UserIcon, Loader2, AlertCircle, CheckCircle } from "lucide-react";

export const ApiDemoPage = () => {
  const { data: users, loading, error, refetch } = useFetch("/users");
  const { execute: createUser, loading: creating } = usePost("/users");
  const { execute: updateUser, loading: updating } = usePut("/users/1");
  const { execute: deleteUser, loading: deleting } = useDelete("/users/1");

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [updateData, setUpdateData] = useState({ name: "", email: "" });
  const [actionResult, setActionResult] = useState(null);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setActionResult(null);

    if (!newUser.name || !newUser.email) {
      setActionResult({ type: "error", message: "Name and email are required" });
      return;
    }

    const result = await createUser(newUser);
    if (result.error) {
      setActionResult({ type: "error", message: result.error });
    } else {
      setActionResult({ type: "success", message: "User created successfully!" });
      setNewUser({ name: "", email: "" });
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setActionResult(null);

    if (!updateData.name || !updateData.email) {
      setActionResult({ type: "error", message: "Name and email are required" });
      return;
    }

    const result = await updateUser(updateData);
    if (result.error) {
      setActionResult({ type: "error", message: result.error });
    } else {
      setActionResult({ type: "success", message: "User updated successfully!" });
    }
  };

  const handleDeleteUser = async () => {
    setActionResult(null);
    const result = await deleteUser();
    if (result.error) {
      setActionResult({ type: "error", message: result.error });
    } else {
      setActionResult({ type: "success", message: "User deleted successfully!" });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold">API Integration Demo</h1>
        <p className="text-sm text-muted-foreground">
          Testing axios hooks with JSONPlaceholder fake API
        </p>
      </div>

      {actionResult && (
        <div
          className={`p-4 rounded-lg border flex items-center gap-3 ${
            actionResult.type === "error"
              ? "bg-destructive/10 border-destructive/30 text-destructive"
              : "bg-success/10 border-success/30 text-success"
          }`}
        >
          {actionResult.type === "error" ? (
            <AlertCircle className="size-5" />
          ) : (
            <CheckCircle className="size-5" />
          )}
          <span>{actionResult.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleCard title="GET - Fetch Users">
          <div className="space-y-4">
            <Button onClick={refetch} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Fetch Users"
              )}
            </Button>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive">
                Error: {error}
              </div>
            )}

            {users && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                <p className="text-sm text-muted-foreground">
                  Total Users: {users.length}
                </p>
                {users.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="p-3 bg-muted/50 rounded-lg flex items-start gap-3"
                  >
                    <IconCard
                      icon={UserIcon}
                      variant="primary"
                      size="sm"
                      className="rounded-full shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                ))}
                {users.length > 5 && (
                  <p className="text-xs text-muted-foreground text-center pt-2">
                    ... and {users.length - 5} more users
                  </p>
                )}
              </div>
            )}
          </div>
        </SimpleCard>

        <SimpleCard title="POST - Create User">
          <form onSubmit={handleCreateUser} className="space-y-4">
            <Input
              label="Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter user name"
            />
            <Input
              label="Email"
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter user email"
            />
            <Button type="submit" disabled={creating} className="w-full">
              {creating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create User"
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              Note: JSONPlaceholder is a fake API. Data won't persist.
            </p>
          </form>
        </SimpleCard>

        <SimpleCard title="PUT - Update User">
          <form onSubmit={handleUpdateUser} className="space-y-4">
            <Input
              label="Name"
              value={updateData.name}
              onChange={(e) =>
                setUpdateData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter new name"
            />
            <Input
              label="Email"
              type="email"
              value={updateData.email}
              onChange={(e) =>
                setUpdateData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter new email"
            />
            <Button type="submit" disabled={updating} className="w-full">
              {updating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update User #1"
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              This will update user with ID 1 in the fake API.
            </p>
          </form>
        </SimpleCard>

        <SimpleCard title="DELETE - Delete User">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This will delete user with ID 1 from the fake API.
            </p>
            <Button
              onClick={handleDeleteUser}
              disabled={deleting}
              variant="danger"
              className="w-full"
            >
              {deleting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete User #1"
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              Note: The fake API will return success but won't actually delete data.
            </p>
          </div>
        </SimpleCard>
      </div>
    </div>
  );
};

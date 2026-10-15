import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
};

type StoreState = {
  count: number;
  name: string;
  increase: () => void;
  showCount: () => void;
  toggleName: () => void;
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
};

const useMyStore = create<StoreState>()(
  persist(
    (set, get) => ({
      count: 1,
      name: "Arsalan",
      increase: () => set((state) => ({ count: state.count + 1 })),
      showCount: () => {
        console.log(get().count);
      },
      toggleName: () =>
        set((state) => ({
          name: state.name === "Arsalan" ? "Ali" : "Arsalan",
        })),
      users: [],
      loading: false,
      error: null,
      fetchUsers: async () => {
        set({ loading: true, error: null });

        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
          );

          if (!response.ok) {
            throw new Error("Users could not be loaded.");
          }

          const users: User[] = await response.json();
          set({ users, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Something went wrong.",
            loading: false,
          });
        }
      },
    }),
    {
      name: "my-store",
    },
  ),
);

export default useMyStore;

import { create, } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
  email: string;
  password: string;
  name: string;
}

type State = {
  user: User;
}

type Actions = {
  addUser: (user: User) => void;
}

const useLoggedUserStore = create(persist<State & Actions>(
  (set) => ({
    user: {
      email: '',
      name: '',
      password: ''
    },
    addUser: (user: User) => set({
      user
    })
  }), {
  name: 'user-storage',
  storage: createJSONStorage(() => sessionStorage)
}))
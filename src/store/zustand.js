import { create } from "zustand";

const usePeopleStore = create((set) => ({
  people: [],
  setPeople: (people) => set({ people }),
  addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
  plusHeart: (id) =>
    set((state) => ({
      people: state.people.map((person) =>
        person.id === id ? { ...person, heart: !person.heart, heartCount: person.heartCount + 1 } : person
      ),
    })),
  minusHeart: (id) =>
    set((state) => ({
      people: state.people.map((person) =>
        person.id === id ? { ...person, heart: !person.heart, heartCount: person.heartCount - 1 } : person
      ),
    })),
}));

export default usePeopleStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePeopleStore = create(
  persist(
    (set) => ({
      people: [],
      setPeople: (people) => set({ people }),
      toggleHeart: (id) =>
        set((state) => ({
          people: state.people.map((person) => {
            if (person.id !== id) return person;
            const isHearted = person.heart;
            return {
              ...person,
              heart: !isHearted,
              heartCount: isHearted ? person.heartCount - 1 : person.heartCount + 1,
            };
          }),
        })),
    }),
    {
      name: "people-storage",
    }
  )
);

export default usePeopleStore;

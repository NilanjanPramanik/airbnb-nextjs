import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      searchedHotels: [],
      setHotels: (hotels) => set((state) => ({ searchedHotels: hotels })),
      removeAllBears: () => set({ searchedHotels: [] }),

      hotelsCatagory: [],
      setHotelsCatagory: (catagory) =>
        set((state) => ({ hotelsCatagory: catagory })),

      clickedHotel: [],
      setClickedHotel: (hotel) => set((state) => ({ clickedHotel: hotel })),
    }),
    {
      name: "airbnb-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

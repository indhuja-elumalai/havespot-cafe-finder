import { create } from 'zustand';

export const useStore = create((set) => ({
    // State
    mapCenter: { lat: 35.6681625, lng: 139.7007624 },
    mapZoom: 15,
    activeCafeId: null,
    isMapIdle: true,

    // Actions
    setMapCenter: (center) => set({ mapCenter: center }),
    setMapZoom: (zoom) => set({ mapZoom: zoom }),
    setActiveCafeId: (id) => set({ activeCafeId: id }),
    setMapIdle: (isIdle) => set({ isMapIdle: isIdle }),
}));
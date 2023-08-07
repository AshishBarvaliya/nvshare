import { create } from 'zustand';

interface StoreProps {
    organizations: any[];
    setOrganization: (organizations: any[]) => void;
}

const useOrganization = create<StoreProps>(set => ({
    organizations: [],
    setOrganization: (organizations) => set({ organizations }),
}));

export default useOrganization;

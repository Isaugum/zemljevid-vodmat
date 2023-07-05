import { create } from 'zustand';

export const useContentState = create((set) => ({
    isMenu: false,
    contentIndex: 0,
    setContentIndex: (value: number) => set(() => ({ contentIndex: value })),
    openMenu: (value: boolean) => set(() => ({ isMenu: value }))
}))
import { create } from 'zustand';

export const useContentState = create((set) => ({
    isMenu: false,
    contentIndex: 0,
    showAnswer: false,
    setContentIndex: (value: number) => set(() => ({ contentIndex: value })),
    openMenu: (value: boolean) => set(() => ({ isMenu: value })),
    setShowAnswer: (value: boolean) => set(() => ({ showAnswer: value}))
}))
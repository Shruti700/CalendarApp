import { create } from 'zustand';


export const useSelectedDate = create<{ selectedDate: Date ; setSelectedDate: (selectedDate: Date)=> void }>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (selectedDate: Date) => set({ selectedDate })
}));

export const useCurentView = create<{ currentView: string ; setCurrentView: (currentView: string)=> void }>((set) => ({
  currentView: 'month',
  setCurrentView: (currentView: string) => set({ currentView })
}));
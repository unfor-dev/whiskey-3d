// Button click Animate

import { create } from 'zustand'

export const useAnimationStore = create((set) => ({
  playBikeAnimation: false,
  triggerBikeAnimation: () => set({ playBikeAnimation: true }),
  resetBikeAnimation: () => set({ playBikeAnimation: false }),
}))

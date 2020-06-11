import { State } from '@/models/main/state.ts';

export const initialState = (): State => ({
  teachers: [],
  isLoading: false,
});

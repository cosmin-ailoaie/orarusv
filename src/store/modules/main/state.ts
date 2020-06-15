import { State } from '@/models/main/state.ts';

export const initialState = (): State => ({
  teachers: [],
  faculties: [],
  rooms: [],
  schedule: {},
  isLoading: false,
  hasError: false,
  alert: {},
});

import { State } from '@/models/main/state.ts';

export const initialState = (): State => ({
  teachers: [],
  selectedTeacher: 0,
  faculties: [],
  rooms: [],
  schedule: [],
  isLoading: false,
  hasError: false,
  alert: {},
});

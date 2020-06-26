import { State } from '@/models/main/state.ts';

export const initialState = (): State => ({
  teachers: [],
  selectedTeacher: -1,
  faculties: [],
  semigroups: [],
  rooms: [],
  schedule: [],
  isLoading: false,
  hasError: false,
  weekend: false,
  alert: {},
});

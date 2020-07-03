import { State } from '@/models/main/state.ts';

export const initialState = (): State => ({
  teachers: [],
  selectedTeacher: '',
  selectedSemiGroup: '',
  faculties: [],
  semigroups: [],
  rooms: [],
  schedule: [],
  isLoading: false,
  hasError: false,
  weekend: false,
  alert: {},
});

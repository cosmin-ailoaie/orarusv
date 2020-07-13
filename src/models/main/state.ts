import { Faculty } from './interfaces';

export interface State {
  teachers: [];
  selectedTeacher: string;
  selectedSemiGroup: string;
  faculties: Faculty[];
  semigroups: [];
  rooms: [];
  schedule: [];
  isLoading: boolean;
  hasError: boolean;
  weekend: boolean;
  alert: {};
  dark: boolean;
}

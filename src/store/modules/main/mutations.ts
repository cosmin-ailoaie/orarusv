import { State } from '@/models/main/state.ts';

import { initialState } from '@/store/modules/main/state';

import { set } from '@/services/stateSetter';

export const GET_FACULTIES_MUTATION = 'GET_FACULTIES_MUTATION';
export const GET_ROOMS_MUTATION = 'GET_ROOMS_MUTATION';
export const GET_TEACHERS_MUTATION = 'GET_TEACHERS_MUTATION';
export const SELECT_TEACHER_MUTATION = 'SELECT_TEACHER_MUTATION';
export const GET_SCHEDULE_MUTATION = 'GET_SCHEDULE_MUTATION';

export const IS_LOADING_MUTATION = 'IS_LOADING_MUTATION';
export const RESET_STATE_MUTATION = 'RESET_STATE_MUTATION';

export const mutations = {
  GET_FACULTIES_MUTATION: (state: State, payload: any) => {
    if (payload.faculties.length > 0) {
      const list = payload.faculties.split('<br />').slice(1, 13);
      const json: any = [];
      list.forEach((element: any) => {
        const line = element.split(';');
        const obj = {
          id: line[0],
          shortName: line[1],
          name: line[2],
        };

        json.push(obj);
      });
      state.faculties = json;
    } else {
      state.faculties = [];
      state.alert = payload.alert;
      state.hasError = payload.hasError;
    }
  },
  GET_TEACHERS_MUTATION: (state: State, payload: any) => {
    console.log('in teachers mutation');

    if (payload.teachers.length > 0) {
      const list = payload.teachers.split('<br />').slice(1, 571);
      const json: any = [];
      list.forEach((element: any) => {
        const line = element.split(';');
        const obj = {
          id: line[0],
          lastName: line[1],
          firstName: line[2],
          faculty: line[3],
        };
        json.push(obj);
      });
      const sorted = json.sort((a: any, b: any) =>
        a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0,
      );
      const arrayAlphabetic: any = [];
      for (let i = 0; i < sorted.length; i++) {
        const firstLetter = sorted[i].lastName.charAt(0);
        if (arrayAlphabetic[firstLetter] === undefined) {
          arrayAlphabetic[firstLetter] = [{}];
        }
        arrayAlphabetic[firstLetter].push(sorted[i]);
      }
      state.teachers = arrayAlphabetic;
      console.log(arrayAlphabetic);
    } else {
      state.teachers = [];
      state.alert = payload.alert;
      state.hasError = payload.hasError;
    }
  },
  SELECT_TEACHER_MUTATION: (state: State, payload: any) => {
    set(state, payload);
  },
  GET_ROOMS_MUTATION: (state: State, payload: any) => {
    if (payload.rooms.length > 0) {
      const list = payload.rooms.split('<br />');
      console.log(list);
      // const json: any = [];
      // list.forEach((element: any) => {
      //   const line = element.split(';');
      //   const obj = {
      //     id: line[0],
      //     shortName: line[1],
      //     name: line[2],
      //   };

      //   json.push(obj);
      // });
      // state.faculties = json;
    } else {
      state.rooms = [];
      state.alert = payload.alert;
      state.hasError = payload.hasError;
    }
  },
  GET_SCHEDULE_MUTATION: (state: State, payload: any) => {
    if (payload.schedule.length > 0) {
      const list1 = payload.schedule.split('8" />');
      const list = list1[1].split('</br>').slice(0, -1);
      console.log(list);
      const json: any = [];
      // list.forEach((element: any) => {
      //   const line = element.split(';');
      //   const obj = {
      //     id: line[0],
      //     shortName: line[1],
      //     name: line[2],
      //   };

      //   json.push(obj);
      // });
      // state.faculties = json;
    } else {
      state.schedule = [];
      state.alert = payload.alert;
      state.hasError = payload.hasError;
    }
  },
  IS_LOADING_MUTATION: (state: State, payload: any) => set(state, payload),
  RESET_STATE_MUTATION: (state: State, payload: any) => {
    Object.assign(state, initialState());
  },
};

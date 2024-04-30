import {create} from 'zustand';
import {combine, devtools} from 'zustand/middleware';

type RouteInitialState = {
  currentPage: string;
};

type SetRouteStore = {
  setCurrentPage: (page: string) => void,

};

const initialState: RouteInitialState = {
  currentPage: '/',
};

const useRouteStore = create(
  devtools(
    combine<RouteInitialState, SetRouteStore>(initialState, (set) => ({
      setCurrentPage: (payload: string) => set(() => ({currentPage: payload})),

    })),
  ),
);

export const useRoutePath = () => {
  return useRouteStore((state) => state.currentPage);
}

export default useRouteStore;
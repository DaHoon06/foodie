import {create} from "zustand";
import {combine, devtools} from "zustand/middleware";

type ModalInitialState = {
  isOpen: boolean;
  type: string;
}

type SetModalStore = {
  setIsOpen: (payload: boolean) => void,
  setModalType: (type: string) => void
}

const initialState: ModalInitialState = {
  isOpen: false,
  type: 'slide'
};

const useModalStore = create(
  devtools(
    combine<ModalInitialState, SetModalStore>(initialState, (set) => ({
      setIsOpen: (payload: boolean) => set(() => ({isOpen: payload})),
      setModalType: (type: string) => set(() => ({type})),
    }))
  )
)

export default useModalStore;

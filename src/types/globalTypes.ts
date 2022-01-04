import { Dispatch, SetStateAction } from "react";

export interface DataForm {
  email: string;
  password?: string;
}

export interface iHandler {
  handleAddSponsor: () => void;
  handleShowList?: () => void;
  handleRemove?: any;
  checked?: Array<Object>;
  setChecked?: Dispatch<SetStateAction<any>>;
}

export interface iProps {
  checked: Array<Object>;
  setChecked: Dispatch<SetStateAction<any>>;
  handleShowList: () => void;
}

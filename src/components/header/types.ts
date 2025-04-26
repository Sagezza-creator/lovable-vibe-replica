
export interface DropdownItem {
  name: string;
  path: string;
}

export interface NavLink {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

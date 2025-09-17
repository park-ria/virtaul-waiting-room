export interface IMenuItemsProps {
  name: string;
  href: string;
  submenu?: IMenuItemsProps[];
}

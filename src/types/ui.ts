export interface DockItem {
  icon: string | React.ReactNode;  
  label: string;                   
  onClick: () => void;             
  className?: string;              
}

export interface DockItemProps {
  children: any;
  className?: string;
  onClick?: () => void;
  mouseX: any;
  spring: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
}

export interface DockProps {
  items: DockItem[];
  className?: string;
  spring?: any;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface NavItem {
  label: string;
  bgColor?: string;
  textColor?: string;
  links?: NavLink[];
}

export interface HeaderProps {
  logo: string;
  logoMobile?: string;
  logoAlt?: string;
  items?: NavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  setShowLogin?: (show: boolean) => void;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showOverlay?: boolean;
}

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  variant?: 'beige' | 'green';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

export interface AlertAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error';
  actions?: AlertAction[];
  showCloseButton?: boolean;
}
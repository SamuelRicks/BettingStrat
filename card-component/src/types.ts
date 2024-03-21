export interface BadgeInterface {
  text: string;
  filled?: boolean;
}
export interface ButtonInterface {
  text: string;
  type: string;
  href: string;
  filled?: boolean;
  icon?: JSX.Element;
}
export interface CardInterface {
  body: string;
  btn: ButtonInterface;
  indicator?: string;
  badge?: BadgeInterface;
  image?: string;
  subtitle?: string;
  name: string;
  id: string;
}

export interface HomePageInterface {
  title: string;
}
export interface LandingInterface {
  btn: ButtonInterface;
}

export interface DashBoardInterface {
  title: string;
}
export interface ErrorPageInterface {
  title: string;
}

export interface NbaPageInterface {
  text: string;
}
export interface NavBarInterface {
  text: string;
  href: string;
}

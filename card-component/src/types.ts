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
  title: string;
  body: string;
  btn: ButtonInterface;
  indicator?: string;
  badge?: BadgeInterface;
  image?: string;
  subtitle?: string;
}

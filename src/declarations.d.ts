declare module "*.module.css" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

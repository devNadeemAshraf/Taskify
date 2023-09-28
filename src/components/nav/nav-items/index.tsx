import NavItem from "./nav-item";

export default function NavItems() {
  return (
    <ul className="flex items-center justify-center gap-4">
      <NavItem type="link" text="textOne"/>
      <NavItem type="link" text="textTwo"/>
      <NavItem type="button" text="textThree"/>
    </ul>
  );
}

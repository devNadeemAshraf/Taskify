type NavItemProps = {
  type: "link" | "button";
  text: string;
};

export default function NavItem({ type, text }: NavItemProps) {
  if (type == "link") {
    return (
      <li className="text-lg font-medium hover:underline cursor-pointer">
        {text}
      </li>
    );
  }

  return <button>{text}</button>;
}

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./styles.css";

export function DropdownMenuComponent() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a href="#">Home</a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item className="DropdownMenuItem">
            <a href="#">Nossas lojas</a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            <a href="#">Novidades</a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            <a href="#">Promoções</a>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

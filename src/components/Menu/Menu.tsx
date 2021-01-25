import React from "react";

import { Nav } from "@redesign-system/react-ui/Nav";
import {
  AppBar,
  AppBarTrigger,
  AppBarBrand,
  AppBarNav,
} from "@redesign-system/react-ui/AppBar";

import { MenuProps } from "./types.menu";
import { NavItems } from "../NavItems";

export function Menu<Props extends MenuProps>({
  currentRoute,
  items = [],
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Menu ${className}`;

  const [opened, setOpened] = React.useState<boolean>(false);
  function onOpenedClick() {
    // eslint-disable-next-line functional/no-expression-statement
    setOpened(!opened);
  }

  function handleOnNavItemClick(_e: any) {
    // eslint-disable-next-line functional/no-expression-statement
    setOpened(false);
  }

  return (
    <AppBar
      display="flex !important"
      className={classNames}
      opened={opened}
      {...propsRest}
    >
      <AppBarTrigger
        onClick={onOpenedClick}
        opened={opened}
        cl="background"
        triggerOn={{ color: "#fff" }}
        triggerOff={{ color: "#fff" }}
        transform="translateY(-4px)"
      />
      <AppBarBrand
        display="none"
        mq={{
          lg: {
            min: {
              display: "block",
            },
          },
        }}
      >
        @otissv
      </AppBarBrand>

      <AppBarNav>
        <Nav
          as="ul"
          flg={1}
          jc="flex-end"
          stacked={false}
          p={3}
          css=".NavItem { margin-top: 4px;}"
        >
          <NavItems
            currentRoute={currentRoute}
            onClick={handleOnNavItemClick}
            items={items}
          />
        </Nav>
      </AppBarNav>
    </AppBar>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Menu.displayName = "Menu";

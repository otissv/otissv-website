import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Box } from "@redesign-system/react-ui/Box";
import { NavItem } from "@redesign-system/react-ui/Nav";

import { NavItemsProps } from "./types.navItems";
import { CTAButton } from "../Button";

export function NavItems<Props extends NavItemsProps>({
  currentRoute,
  onClick,
  items = [],
}: Props): JSX.Element {
  const path =
    currentRoute === "/" || currentRoute.slice(0, 2) === "/#"
      ? "/"
      : currentRoute;

  return (
    <Fragment>
      {items.map(({ label, url, cta }: any) => {
        const isCurrentPath = path === url;

        return (
          <NavItem
            className="NavItem"
            key={label}
            id={label}
            title={label}
            px={3}
            onClick={onClick}
          >
            {cta ? (
              <CTAButton href={url} mt={6} mq={{ lg: { min: { mt: 0 } } }}>
                Hire Me
              </CTAButton>
            ) : (
              <Link to={url}>
                <Box
                  as="span"
                  d="inline-block"
                  fs={4}
                  css={{
                    borderBottom: isCurrentPath
                      ? "2px solid var(--link-color)"
                      : "2px solid transparent",
                    padding: "4px 0",
                    margin: "0 5px",
                    color: isCurrentPath ? "var(--link-color)" : "#fff",
                    "&:hover, &:active, &:focus": {
                      borderBottom: "2px solid var(--link-color)",
                      color: "var(--link-color)",
                    },
                    "&:focus": {
                      outline: "0.2em solid #006dea",
                    },
                  }}
                >
                  {label}
                </Box>
              </Link>
            )}
          </NavItem>
        );
      })}
    </Fragment>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
NavItems.displayName = "NavItems";

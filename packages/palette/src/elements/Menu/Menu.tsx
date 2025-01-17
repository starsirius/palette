import React from "react"
import styled from "styled-components"

import { display } from "styled-system"
import { color } from "../../helpers/color"
import { BorderBox } from "../BorderBox"
import { Box, BoxProps } from "../Box"
import { Flex } from "../Flex"
import { Separator } from "../Separator"
import { Spacer } from "../Spacer"
import { Sans } from "../Typography"

interface MenuProps {
  title?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/** Menu */
export const Menu: React.FC<MenuProps> = ({ title, children, ...props }) => {
  return (
    <MenuContainer width={230} m="2px" {...props}>
      <BorderBox p={0} pb={1} background="white">
        <Flex flexDirection="column" width="100%">
          {title && (
            <Box px={2} pt={2} pb={1}>
              <Sans size="3" weight="medium">
                {title}
              </Sans>
              <Spacer py={0.5} />
              <Separator />
            </Box>
          )}

          <Box pt={title ? 0 : 1}>{children}</Box>
        </Flex>
      </BorderBox>
    </MenuContainer>
  )
}

const MenuContainer = styled(Box)`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05);
`

// Menu Item

interface MenuItemProps extends BoxProps {
  children: React.ReactNode
  href?: string
  color?: string // TODO:  Look into type conflict with styled-system
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/** MenuItem */
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  ...props
}) => {
  return (
    <MenuLink href={href} {...props}>
      <Box px={2} py={1}>
        <Sans size="2" weight="medium">
          {children}
        </Sans>
      </Box>
    </MenuLink>
  )
}

const MenuLink = styled.a`
  cursor: pointer;
  display: flex;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-decoration: none;

  ${display};

  &:hover {
    background-color: ${color("black5")};
  }

  ${Sans} {
    display: flex;
    align-items: center;
  }
`

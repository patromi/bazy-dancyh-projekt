import { Box, List, Stack, Typography } from "@mui/material";
import { useMenu } from "@refinedev/core";
import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import MenuListItem from "./MenuListItem";

export default function Sidebar(props: PropsWithChildren<{}>) {
  const { t } = useTranslation("translation");

  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();

  return (
    <Box display="grid" gridTemplateColumns="250px 1fr" height="100svh">
      <Stack
        direction="column"
        padding={1}
        gap={1}
        className="border-r-2 border-gray-300 bg-gray-50/50"
      >
        <Typography variant="subtitle1" fontWeight="bold" sx={{ px: 2, py: 1 }}>
          {t("navbar.navigation")}
        </Typography>

        <List component="nav" disablePadding>
          {menuItems.map((item) => (
            <MenuListItem
              {...item}
              key={item.key || item.name}
              selectedKey={selectedKey}
              defaultOpenKeys={defaultOpenKeys}
            />
          ))}
        </List>
      </Stack>

      <Box flex={1} height="100%" overflow="auto">
        {props.children}
      </Box>
    </Box>
  );
}

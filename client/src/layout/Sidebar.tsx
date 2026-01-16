import { resources } from "@/models";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export default function Sidebar(props: PropsWithChildren<{}>) {
  const { t } = useTranslation("translation");

  return (
    <Box display="grid" gridTemplateColumns="250px 1fr" height="100svh">
      <Stack
        direction="column"
        padding={2}
        gap={2}
        className="border-r-2 border-gray-300"
      >
        <Typography>{t("navbar.navigation")}</Typography>

        <List>
          {resources.map((resource) => (
            <ListItem key={resource.name}>
              {/* @ts-ignore */}
              {t(`${resource.name}.${resource.name}`)}
            </ListItem>
          ))}
        </List>
      </Stack>

      <Box flex={1}>{props.children}</Box>
    </Box>
  );
}

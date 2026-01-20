import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import type { TreeMenuItem } from "@refinedev/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

type MenuListItemProps = TreeMenuItem & {
  selectedKey?: string;
  defaultOpenKeys?: string[];
};

export default function MenuListItem({
  selectedKey,
  defaultOpenKeys,
  ...item
}: MenuListItemProps) {
  const { t } = useTranslation("translation");

  const isSelected = item.key === selectedKey;
  const hasChildren = item.children.length > 0;

  return (
    <>
      <ListItemButton
        selected={isSelected}
        component={item.route ? Link : "div"}
        to={item.route ? item.route : undefined}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText
          primary={
            // @ts-ignore
            t(`${item.name}.${item.name}`)
          }
        />
      </ListItemButton>

      {hasChildren && (
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {item.children.map((child) => (
            <MenuListItem
              {...child}
              key={child.key || child.name}
              selectedKey={selectedKey}
              defaultOpenKeys={defaultOpenKeys}
            />
          ))}
        </List>
      )}
    </>
  );
}

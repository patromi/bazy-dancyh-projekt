import { handleErrorNotification } from "@/utils/errorNotification";
import type { DeleteButtonProps } from "@refinedev/mui";
import { DeleteButton as MuiDeleteButton } from "@refinedev/mui";
import { type OpenNotificationParams } from "@refinedev/core";
import { useTranslation } from "react-i18next";

export default function DeleteButton(props: DeleteButtonProps) {
  const { t } = useTranslation("translation");

  return (
    <MuiDeleteButton
      {...props}
      errorNotification={(error, values, resource) =>
        handleErrorNotification(
          error,
          values,
          resource,
        ) as OpenNotificationParams
      }
    />
  );
}

import type { DeleteButtonProps } from "@refinedev/mui";
import { DeleteButton as MuiDeleteButton } from "@refinedev/mui";
import type { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

export default function DeleteButton(props: DeleteButtonProps) {
  const { t } = useTranslation("translation");

  return (
    <MuiDeleteButton
      {...props}
      errorNotification={(error, value, resourceKey) => {
        const axiosError = error as AxiosError<{ detail: string }>;

        // @ts-ignore -- resource is string
        const resource = t(`${resourceKey}.${resourceKey}`);
        const description = (axiosError.response?.data.detail as string) ?? "";

        if (axiosError.status === undefined) return undefined;
        if (axiosError.status < 400 || axiosError.status >= 500)
          return undefined;

        switch (axiosError.status) {
          case 409:
            return {
              message: t("notifications.deleteError", { resource }),
              description,
              type: "error",
            };

          default:
            return {
              message: t("notifications.error"),
              description,
              type: "error",
            };
        }
      }}
    />
  );
}

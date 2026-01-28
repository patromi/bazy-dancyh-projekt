import i18n from "@/i18n";
import type { AxiosError } from "axios";

export const handleErrorNotification = (
  error: unknown,
  _value: unknown,
  resourceKey?: string,
) => {
  const axiosError = error as AxiosError<{ detail: string }>;

  // @ts-ignore -- resource is string
  const resource = i18n.t(`${resourceKey}.${resourceKey}`);
  const description = (axiosError.response?.data.detail as string) ?? "";

  if (axiosError.status === undefined) return undefined;
  if (axiosError.status < 400 || axiosError.status >= 500) return undefined;

  switch (axiosError.status) {
    case 409:
      return {
        message: i18n.t("notifications.deleteError", { resource }),
        description,
        type: "error",
      };
    case 400:
      return {
        message: i18n.t("notifications.validationError", { resource }),
        description,
        type: "error",
      };

    default:
      return {
        message: i18n.t("notifications.error"),
        description,
        type: "error",
      };
  }
};

import type { CrudOperators } from "@refinedev/core";

export const mapOperator = (operator: CrudOperators): string => {
  switch (operator) {
    case "lt":
    case "gt":
    case "lte":
    case "gte":
      return `__${operator}`;

    case "null":
    case "nnull":
      return `__isnull`;

    case "eq":
      return `__iexact`;

    case "contains":
    case "startswith":
    case "endswith":
      return `__i${operator}`;

    // TODO
    case "between":
    case "nbetween":
    case "in":
    case "nin":
    case "ina":
    case "nina":
    case "ne":
    case "ncontains":
    case "nstartswith":
    case "nendswith":
    default:
      return "";
  }
};

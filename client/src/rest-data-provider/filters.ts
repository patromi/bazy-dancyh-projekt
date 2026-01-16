import type { CrudOperators } from "@refinedev/core";
import {
  getGridStringOperators,
  getGridNumericOperators,
  type GridFilterOperator,
  getGridBooleanOperators,
} from "@mui/x-data-grid";

// Refine operators (używane przez useDataGrid)
export const charFieldsFilters: CrudOperators[] = [
  "eq",
  "contains",
  "startswith",
  "endswith",
  "null",
] as const;

export const numberFieldsFilters: CrudOperators[] = [
  "eq",
  "lt",
  "gt",
  "lte",
  "gte",
  "null",
] as const;

export const textFieldsFilters: CrudOperators[] = ["contains", "null"] as const;

export const booleanFieldsFilters: CrudOperators[] = ["eq", "null"] as const;

// DataGrid filter operators (dla kolumn DataGrid)
export const stringFilterOperators: GridFilterOperator[] =
  getGridStringOperators().filter((operator) =>
    ["contains", "equals", "startsWith", "endsWith", "isEmpty"].includes(
      operator.value,
    ),
  );

export const numberFilterOperators: GridFilterOperator[] =
  getGridNumericOperators().filter((operator) =>
    ["=", "!=", ">", ">=", "<", "<=", "isEmpty", "isNotEmpty"].includes(
      operator.value,
    ),
  );

export const booleanFilterOperators: GridFilterOperator[] =
  getGridBooleanOperators().filter((operator) =>
    ["is", "isNot"].includes(operator.value),
  );

export const dateFilterOperators: GridFilterOperator[] =
  getGridNumericOperators().filter((operator) =>
    ["=", "!=", ">", ">=", "<", "<=", "isEmpty", "isNotEmpty"].includes(
      operator.value,
    ),
  );
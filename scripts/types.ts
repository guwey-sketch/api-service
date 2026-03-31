// types.ts
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type KeyValuePair<T> = [string, T];

export type FilterQuery<T> = {
  [P in keyof T]?: T[P] | T[P][];
};

export type SortQuery = {
  [key: string]: SortDirection;
};

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type PaginationQuery = {
  limit?: number;
  skip?: number;
  offset?: number;
};

export type QueryParams<T> = {
  filter?: FilterQuery<T>;
  sort?: SortQuery;
  pagination?: PaginationQuery;
};

export type RequestBody<T> = T & {
  [key: string]: any;
};
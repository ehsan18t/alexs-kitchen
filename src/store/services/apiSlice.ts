import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_DEV_MODE
  ? "http://localhost:3000/api"
  : process.env.NEXT_PUBLIC_FOOD_API;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: "include",
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

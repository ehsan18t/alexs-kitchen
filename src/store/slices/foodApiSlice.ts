import { apiSlice } from "../services/apiSlice";

const foodApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveFoods: builder.query({
      query: ({ start, end }) => `/food_s${start}_e${end}.json`,
    }),
  }),
});

export const { useRetrieveFoodsQuery } = foodApiSlice;

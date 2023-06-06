import { apiSlice } from '../api/apiSlice';



const adminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query:()=> "projects"
        })
    })
})

export const { useGetProjectsQuery } = adminApi;
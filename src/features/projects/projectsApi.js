
import { apiSlice } from '../api/apiSlice';



const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query:()=> "projects"
        }),
        postProjects: builder.mutation({
            query: (data) => ({
                url: "projects",
                method: "POST",
                body:data
            })
        })
    })
})

export const { useGetProjectsQuery,usePostProjectsMutation } = projectsApi;
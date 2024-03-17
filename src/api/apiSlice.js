import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath:"api",
    tagTypes:["USER"],
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
    endpoints:(builder)=>({
        getUsers: builder.query({
            query:()=>"/users",
            providesTags:["USER"]
        }),
        getUser: builder.query({
            query:(userId)=>`users/${userId}`,
            providesTags:["USER"]
        }),
        addNewUser: builder.mutation({
            query:initialUser=>({
                url:"/users",
                method:"POST",
                body:initialUser
            }),
            invalidatesTags:["USER"]
        }),
        EditUser: builder.mutation({
            query:user=>({
                url:`users/${user.id}`,
                method:"PUT",
                body:user
            }),
            invalidatesTags:["USER"]
        }),
        // deleteUser: builder.mutation({
        //     query:userId=>({
        //         url:`users/${userId}`,
        //         method:"DELETE",
        //         body:
        //     })
        // })
    })
})
export const {useGetUsersQuery,useGetUserQuery,useAddNewUserMutation,useEditUserMutation} =apiSlice;
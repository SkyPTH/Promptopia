'use client'

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import { useSession} from "next-auth/react";
import Profile from "components/Profile";
const MyProfile =()=>{
    const router=useRouter();
    const {data: session}=useSession();
    const [post,setPost]=useState([])
    const handleEdit=  ()=>{
        console.log("asdasd")
         router.push(`/update-prompt?id=${post._id}`)

    }
    const handleDelete=async ()=>{
        router.push(`/update-prompt?id=${post._id}`)
    }
    useEffect(()=>{
        const fetchPosts=async ()=>{
            const response=await fetch(`/api/users/${session?.user.id}/posts`);
            const data= await response.json();
            setPost(data)
        }
        if(session?.user.id) fetchPosts();
    },[]);
    return(
        <Profile
            name="My"
            desc="Welcome to your profile page"
            data={post}
            handleEdit={handleEdit}
            handleDetele={handleDelete}
        />
    )
}
export default MyProfile
'use client';
import React from "react";
import {useSession} from "next-auth/react";
import {useRouter,useSearchParams} from "next/navigation";
import Form from "../../components/Form";
import {useState,useEffect} from "react";
import {router} from "next/client";
const EditPrompt =()=>{
    const router=useRouter();
    const [submitting,setSubmitting]=useState(false)
    const [post,setPost]=useState({
        prompt:"",
        tag:""
    })
    const {data: session}=useSession();
    const searchParams=useSearchParams();
    const promptId=searchParams.get('id')

    // console.log(session)
    useEffect(() => {
        const getPromptDetail= async ()=>{
            const response=await fetch(`/api/prompt/${promptId}`)
            const data2=await response.json();
            console.log(response)
            setPost({
                prompt: data2.prompt,
                tag: data2.tag
            })
        }

        if(promptId)getPromptDetail()
    },[promptId])
    // const createPrompt=async (e)=>{
    //     e.preventDefault();
    //     setSubmitting(true)
    //     try {
    //         const response=await fetch('/api/prompt/new',{
    //             method:'POST',
    //             body:JSON.stringify({
    //                 prompt:post.prompt,
    //                 userID:session?.user.id,
    //                 tag:post.tag
    //             })
    //         })
    //         if(response.ok){await router.push('/')}
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    //     finally {
    //         setSubmitting(false);
    //     }
    // }
    return(
        <div className="">
            <Form
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={()=>{

                }}
            >

            </Form>
        </div>
    )
}
export default EditPrompt
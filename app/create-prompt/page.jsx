'use client';
import React from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Form from "../../components/Form";
import {useState} from "react";
import {router} from "next/client";
const CreatePrompt =()=>{
    const router=useRouter();
    const [submitting,setSubmitting]=useState(false)
    const [post,setPost]=useState({
        prompt:"",
        tag:""
    })
    const {data: session}=useSession();
    // console.log(session)
    const createPrompt=async (e)=>{
        e.preventDefault();
        setSubmitting(true)
        try {
            const response=await fetch('/api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    userID:session?.user.id,
                    tag:post.tag
                })
            })
            if(response.ok){await router.push('/')}
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setSubmitting(false);
        }
    }
    return(
        <div className="">
            <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
            >

            </Form>
        </div>
    )
}
export default CreatePrompt
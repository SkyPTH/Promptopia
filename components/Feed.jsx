'use client';
import React from "react";
import PromptCard from "./PromptCard";
import {useState,useEffect} from "react";
const Feed = () => {
    const [searchText,setSearchText]=useState("");
    const [post,setPost]=useState([]);
    const handleSearchChange= (e)=>{

    }

    const PromptCardList=({data,handleTagClick}) =>{
        return(
            <div
                className='mt-16 prompt_layout'
            >
                {
                    data.map((post)=>(
                        <PromptCard
                            key={post._id}
                            post={post}
                            handleTagClick={handleTagClick}
                        />
                    ))
                }
            </div>
        )
    }
    useEffect(()=>{
        const fetchPosts=async ()=>{
            const response=await fetch("/api/prompt");
            const data= await response.json();
            setPost(data)
        }
        fetchPosts()
    },[]);

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    placeholder='Search for a tag or username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    type='text'
                    className='search_input peer'
                />
            </form>
            <PromptCardList
                data={post}
            />


        </section>
    )
}
export default Feed
import React from "react";
import Link from "next/link";

const Form =({type, post, setPost, submitting, handleSubmit})=>{
    return(
        <section className="w-full flex-center flex-col">
            <h1 className='head_text'>
                <span>{type} Post</span>
            </h1>
            <form
                onSubmit={handleSubmit}
                className='mt-10  max-w-2x1 flex flex-col gap-7 glassmorphism'
            >
                <label>
                    <p className='font-satoshi font-semibold text-base text-gray-700'>
                        Your AI Prompt
                    </p>
                    <textarea
                        value={post.prompt}
                        onChange={(e) =>setPost({
                            ...post,
                            prompt:e.target.value}) }
                        placeholder="Write your prompt here..."
                        required
                        className='form_textarea'
                    />
                </label>
                <label>
                    <p className='font-satoshi font-semibold text-base text-gray-700'>
                        Tag {` `}
                        <span className="font-normal">(#product,#webdevelopment,#idea) </span>
                    </p>
                    <input
                        value={post.tag}
                        onChange={(e) =>setPost({
                            ...post,
                            tag:e.target.value}) }
                        placeholder="#tag"
                        required
                        className='form_input'
                    />
                </label>
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>
                    <button type='submit' disabled={submitting} className='text-sm px-5 bg-primary-orange rounded-full text-white' style={{marginLeft:"10px"}}>
                        {submitting?`${type}...`: type}
                    </button>
                </div>
            </form>
        </section>
    )
}
export default Form
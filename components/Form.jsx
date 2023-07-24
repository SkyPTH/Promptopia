import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/globals.css'
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='container'>
      <h1 className='head_text text-center'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='text-center' style={{fontSize:'20px',margin:"20px"}}>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10  flex flex-col gap-7 '
      >
        <label>
          <p className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </p>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
            style={{border:"1px solid"}}
          />
        </label>

        <label>
          <p className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </p>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='w-full'
            style={{border:"1px solid",borderRadius:"5px",height:"40px"}}
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            style={{marginLeft:"20px"}}
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

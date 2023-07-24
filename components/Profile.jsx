import PromptCard from "./PromptCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/globals.css'
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='container'>
      <h1 className='head_text text-center' >
        <span className='blue_gradient' >{name} Profile</span>
      </h1>
      <p className='desc text-center' style={{marginTop:"20px",fontSize:'20px'}}>{desc}</p>

      <div className='mt-10 row'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            className='col-6'

          />
        ))}
      </div>
    </section>
  );
};

export default Profile;

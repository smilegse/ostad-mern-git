
const ContactForm = (props) => {
    
    const PostFormData=(event)=>{
        event.preventDefault();
        alert('Form Submited')
    }

    return (
        <div>
            <h1>this.props.title</h1>
           <form onSubmit={PostFormData}>
            <input placeholder="Name"></input>
            <button type="submit">Submit</button>
           </form>
        </div>
    );
};

export default ContactForm;
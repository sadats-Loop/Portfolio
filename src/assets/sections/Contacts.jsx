import ParticlesBackground from "../../components/ParticlesBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;



export default function Contact() {


  const [formData, setFormData] = useState({

    name:"",
    email:"",
    service:"",
    budget:"",
    idea:"",

  });


  const [errors,setErrors] = useState({});

  const [status,setStatus] = useState("");
  
  const [loading,setLoading] = useState(false);


  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };




  const validate = ()=>{

    let newErrors={};


    if(!formData.name)
      newErrors.name="Name is required";


    if(!formData.email)
      newErrors.email="Email is required";


    if(!formData.idea)
      newErrors.idea="Please describe your idea";


    setErrors(newErrors);


    return Object.keys(newErrors).length===0;

  };





const sendEmail = (e) => {

  e.preventDefault();

  setLoading(true);


  emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    formData,
    PUBLIC_KEY
  )

  .then(() => {

    setLoading(false);

    setStatus("Message sent successfully 🚀");


    setFormData({

      name: "",
      email: "",
      service: "",
      budget: "",
      idea: ""

    });

  })


  .catch(() => {

    setLoading(false);

    setStatus("Failed to send message ❌");

  });


};



return(

<section

id="contact"

className="
relative
w-full
min-h-screen
bg-black
overflow-hidden
text-white
py-20
px-6
md:px-20
flex
flex-col
md:flex-row
items-center
justify-between
gap-12
"

>


<ParticlesBackground />



{/* Background Glow */}

<div className="
absolute
top-20
left-0
w-[300px]
h-[300px]
bg-[#1cd8d2]
opacity-20
blur-[120px]
rounded-full
"/>


<div className="
absolute
bottom-20
right-0
w-[300px]
h-[300px]
bg-[#302b63]
opacity-30
blur-[120px]
rounded-full
"/>




{/* Left Content */}


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.6
}}

className="
relative
z-10
max-w-xl
"

>


<h2 className="
text-4xl
sm:text-5xl
font-bold
bg-gradient-to-r
from-[#1cd8d2]
via-[#00bf8f]
to-[#302b63]
bg-clip-text
text-transparent
">

Let's Build Something Amazing

</h2>



<p className="
mt-5
text-white/70
leading-relaxed
">

Have a project idea, freelance opportunity, or just want to talk about technology?
Feel free to send me a message.

</p>



<div className="
flex
gap-5
mt-8
text-3xl
">


<a>
<FaGithub />
</a>

<a>
<FaLinkedin />
</a>

<a>
<FaEnvelope />
</a>


</div>



</motion.div>







{/* Contact Form */}



<motion.form

onSubmit={sendEmail}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.6
}}

className="
relative
z-10
w-full
max-w-lg
bg-white/[0.06]
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
shadow-2xl
"

>


<h3 className="
text-2xl
font-semibold
mb-6
">

Send Message

</h3>





<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
mb-4
bg-white/10
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-[#1cd8d2]
"

/>


{
errors.name &&
<p className="text-red-400 text-sm mb-3">
{errors.name}
</p>
}






<input

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Your Email"

className="
w-full
mb-4
bg-white/10
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-[#1cd8d2]
"

/>



<select

name="service"

value={formData.service}

onChange={handleChange}

className="
w-full
mb-4
bg-white/10
border
border-white/10
rounded-xl
px-5
py-3
outline-none
"

>

<option className="text-black">
Select Service
</option>

<option className="text-black">
Web Development
</option>

<option className="text-black">
Frontend Development
</option>

<option className="text-black">
Full Stack Development
</option>


</select>





<input

name="budget"

value={formData.budget}

onChange={handleChange}

placeholder="Budget (Optional)"

className="
w-full
mb-4
bg-white/10
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-[#1cd8d2]
"

/>






<textarea

name="idea"

value={formData.idea}

onChange={handleChange}

placeholder="Tell me about your project..."

rows="5"

className="
w-full
mb-5
bg-white/10
border
border-white/10
rounded-xl
px-5
py-3
outline-none
resize-none
focus:border-[#1cd8d2]
"

/>




<button

type="submit"

disabled={loading}

className="
w-full
py-3
rounded-xl
font-semibold
bg-gradient-to-r
from-[#1cd8d2]
via-[#00bf8f]
to-[#302b63]
hover:scale-105
transition
disabled:opacity-50
"

>

{
  loading ? "Sending..." : "Send Message"
}


</button>



{
status &&

<p className="
mt-4
text-center
text-[#1cd8d2]
">

{status}

</p>

}



</motion.form>




</section>

)

}
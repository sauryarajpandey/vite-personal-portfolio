import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate Name
    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.match(emailRegex)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Validate Message
    if (form.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_1xqlyg8",
        "template_nrk8ixw",
        {
          from_name: form.name,
          to_name: "Saurya Pandey",
          from_email: form.email,
          to_email: "sauryap77@gmail.com",
          message: form.message,
        },
        "l43Ne0egSWErq3s8x"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you. I have received your message and will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Send"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <div>

        <br></br>
        <h1 style={{ marginBottom: "5px" }}>
          <b>Socials</b>
        </h1>
        <a
          href="https://www.linkedin.com/in/saurya-raj-pandey-77a1a9160/"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <LinkedInIcon style={{ fontSize: "30" }} />
        </a>
        <a
          href="https://github.com/Saurya-Raj-Pandey"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <GitHubIcon style={{ fontSize: "30" }} />
        </a>
        <a
          href="https://join.skype.com/invite/u8gyUIgJnJgQ"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <PermContactCalendarIcon style={{ fontSize: "30" }} />
        </a>

        <a
          href="https://sauryapandey.medium.com/"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <BookIcon style={{ fontSize: "30" }} />
        </a>

        <a
          href="https://instagram.com/saurya_pandey_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <InstagramIcon style={{ fontSize: "30" }} />
        </a>
        <a
          href="https://www.facebook.com/saurya.raj.pandey?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon style={{ fontSize: "30" }} />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

import Button from "../components/Button";
import { useFormik } from "formik";
import { messageSchema } from "../data/Validations/messageValidation";
import Swal from "sweetalert2";
import { socials } from "../data";
import * as Icon from "../assets/icons";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const onSubmit = async (formValues: FormValues, actions: any) => {
    const formData = new FormData();
    formData.append("access_key", "52ffac90-031f-4c21-9a10-a21e61821a73");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      actions.resetForm();
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message || "Something went wrong.",
        icon: "error",
      });
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik<FormValues>({
      initialValues,
      validationSchema: messageSchema,
      onSubmit,
    });

  return (
    <section
      id="contact"
      className="min-h-[calc(100dvh)] justify-center max-container flex-col overflow-x-auto flex pb-8 py-4 lg:gap-12 gap-8"
    >
      <div className="w-full flex flex-col justify-center items-center gap-2 py-4 px-4">
        <h2 className="font-inter sm:text-5xl text-4xl tracking-tighter text-neutral-900 font-light ">
          {" "}
          Contact Me{" "}
        </h2>
        <h4 className="font-inter sm:text-xl text-lg tracking-tight text-neutral-400 font-light text-center lg:text-left">
          {" "}
          If you'd like to get in touch, please fill out the form below or
          connect with me through my social profiles.{" "}
        </h4>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-12">
        <div className="flex-1 flex-col flex justify-between gap-4">
          <h5 className="text-neutral-900 sm:text-3xl text-2xl font-inter font-light">
            {" "}
            Contact Information{" "}
          </h5>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row sm:gap-5 gap-4 ">
              <img
                src={Icon.mail}
                alt="Mail"
                className="sm:w-14 sm:h-14 h-10 w-10"
              />
              <div className="flex flex-col justify-center gap-1">
                <h6 className="sm:text-xl text-lg text-neutral-900 font-inter font-semibold">
                  {" "}
                  Email:{" "}
                </h6>
                <p className="font-inter text-sm sm:text-base font-light font-neutral-900">
                  {" "}
                  benjamin.work.tang@gmail.com{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-row sm:gap-5 gap-4">
              <img
                src={Icon.phone}
                alt="Phone"
                className="sm:w-14 sm:h-14 h-10 w-10"
              />
              <div className="flex flex-col justify-center gap-1">
                <h6 className="sm:text-xl text-lg text-neutral-900 font-inter font-semibold">
                  {" "}
                  Phone:{" "}
                </h6>
                <p className="font-inter text-sm sm:text-base  font-light font-neutral-900">
                  {" "}
                  +1 (347) 520 7272{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-row sm:gap-5 gap-4">
              <img
                src={Icon.location}
                alt="Location"
                className="sm:w-14 sm:h-14 h-10 w-10"
              />
              <div className="flex flex-col justify-center gap-1">
                <h6 className="sm:text-xl text-lg text-neutral-900 font-inter font-semibold">
                  {" "}
                  Location:{" "}
                </h6>
                <p className="font-inter text-sm sm:text-base  font-light font-neutral-900">
                  {" "}
                  New York, New York{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:w-fit w-full">
              <div className="flex justify-center items-center gap-4 flex-col pt-4 sm:pt-8 lg:pt-0">
                <h5 className="text-neutral-900 text-2xl sm:text-3xl font-inter font-light">
                  {" "}
                  Follow Me On:{" "}
                </h5>
                <div className="flex sm:gap-12 gap-6 px-0 sm:pl-4">
                  {socials.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={soc.icon}
                        alt={soc.name}
                        className="sm:w-12 sm:h-12 h-8 w-8 hover:scale-108 hover:cursor-pointer duration-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-8">
            <h5 className="text-neutral-900 text-2xl sm:text-3xl font-inter font-light hidden lg:block">
              {" "}
              Send a Message{" "}
            </h5>
            <form onSubmit={handleSubmit} className="flex flex-col gap-20">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-inter text-neutral-900 tracking-tight sm:text-lg text-base font-light">
                      {" "}
                      NAME{" "}
                    </label>
                    <input
                      type="text"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="name"
                      placeholder="Enter Your Name..."
                      className={`text-neutral-900 font-normal w-full font-inter text-sm sm:text-base tracking-normal py-4 pr-2 
                        
                        ${errors.name && touched.name ? `border-b-error-400 placeholder-error-400 ` : `border-b-neutral-900 placeholder-neutral-400 `}
                        
                        
                         border-b-2 outline-none overflow-hidden text-ellipsis whitespace-nowrap`}
                    />
                    <div
                      className={`px-2 h-8 flex items-center rounded-sm ${errors.name && touched.name ? `bg-error-100` : `invisible`}`}
                    >
                      {errors.name && touched.name && (
                        <div className="flex items-center gap-2">
                          <img
                            src={Icon.errorRed}
                            alt="Error"
                            className="w-5 h-auto"
                          />
                          <label className="font-inter text-sm text-error-500 font-base">
                            {" "}
                            {errors.name}{" "}
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-inter text-neutral-900 tracking-tight sm:text-lg text-base font-light">
                      {" "}
                      EMAIL{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Your Email..."
                      className={`text-neutral-900 font-normal w-full font-inter text-sm sm:text-base tracking-normal py-4 pr-2 ${errors.email && touched.email ? `border-b-error-400 placeholder-error-400 ` : `border-b-neutral-900 placeholder-neutral-400 `} border-b-2 outline-none overflow-hidden text-ellipsis whitespace-nowrap`}
                    />
                    <div
                      className={`px-2 h-8 flex items-center rounded-sm ${errors.email && touched.email ? `bg-error-100` : `invisible`}`}
                    >
                      {errors.email && touched.email && (
                        <div className="flex items-center gap-2">
                          <img
                            src={Icon.errorRed}
                            alt="Error"
                            className="w-5 h-auto"
                          />
                          <label className="font-inter text-sm text-error-500 font-base">
                            {" "}
                            {errors.email}{" "}
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-inter text-neutral-900 tracking-tight sm:text-lg text-base font-light">
                    {" "}
                    MESSAGE{" "}
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter Your Message..."
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`text-neutral-900 font-normal w-full font-inter text-sm sm:text-base tracking-normal pt-4 pb-2 pr-2  ${errors.message && touched.message ? `border-b-error-400 placeholder-error-400 ` : `border-b-neutral-900 placeholder-neutral-400 `} border-b-2 outline-none resize-none overflow-y-auto`}
                  />
                  <div
                    className={`px-2 h-8 flex items-center rounded-sm ${errors.message && touched.message ? `bg-error-100` : `invisible`}`}
                  >
                    {errors.message && touched.message && (
                      <div className="flex items-center gap-2">
                        <img
                          src={Icon.errorRed}
                          alt="Error"
                          className="w-5 h-auto"
                        />
                        <label className="font-inter text-sm text-error-500 font-base">
                          {" "}
                          {errors.message}{" "}
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end pr-1">
                <Button
                  outline={false}
                  text={"Send Message"}
                  width={"lg:w-46 sm:w-44 w-40"}
                  height={"lg:h-16 h-14"}
                  radius={"rounded-[0.5em]"}
                  type={"submit"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

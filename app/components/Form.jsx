import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <form className="bg-white mx-auto my-6 rounded-xl w-1/3 p-4 shadow space-y-4" {...storyblokEditable(blok)} onSubmit={handleSubmit(onSubmit)}>
      {blok.input.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          register={register}
          errors={errors}
        />
      ))}
      <button className="w-full flex justify-center py-2 px-4 rounded-md shadow text-sm font-medium text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700" type="submit">Submit</button>
    </form>
  );
}
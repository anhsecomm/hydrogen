import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <form {...storyblokEditable(blok)} onSubmit={handleSubmit(onSubmit)}>
      {blok.input.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          register={register}
          errors={errors}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
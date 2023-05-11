import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
export default function FormInputs({ blok, register, errors }) {
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.label}</label>
      <input
        type={blok.Type}
        placeholder={blok.placeholder}
        style={{"border":"1px solid #333"}}
        {...register(blok.name)}
      />
    </div>
  );
}
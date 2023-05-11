import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
export default function FormInputs({ blok, register, errors }) {
  return (
    <div {...storyblokEditable(blok)}>
<label className="block text-sm font-medium text-gray-700">{blok.label}</label>
      
      <input
      
        type={blok.Type}
        placeholder={blok.placeholder}
        style={{"border":"1px solid #333"}}
        {...register(blok.name, {
          required: true,
        })}
      />
    
      {blok.Validator?.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          errors={errors}
          inputName={blok.name}
        />
      ))}
    </div>
  );
}
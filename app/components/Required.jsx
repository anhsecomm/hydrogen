import { storyblokEditable } from "@storyblok/react";
export default function Required({ blok, errors, inputName }) {
  return (
    <div {...storyblokEditable(blok)} className="text-red-500">
      {
        errors.customername?.type === "required" &&
        inputName === "customername" &&
        blok.errorMessage
      }
       {
        errors.telephone?.type === "required" &&
        inputName === "telephone" &&
        blok.errorMessage
      }
    </div>
  );
}
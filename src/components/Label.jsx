import { joinClasses } from "@/utils/utils"

export default function Label ({
  text,
  htmlFor,
  className,
  required,
  ...props
}) {
  const defaultClasses = 'text-gray-600';
  const treatedText = text + (required ? '*' : '');

  return (
    <label
      htmlFor={htmlFor}
      className={joinClasses(defaultClasses, className)}
      {...props}
    >
      {treatedText}
    </label>
  )
}
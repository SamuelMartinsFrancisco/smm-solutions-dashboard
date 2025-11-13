import { joinClasses } from "../utils/utils"

export default function Hint({ text, className }) {
  return (
    <span
      className={joinClasses('text-gray-500 text-sm', className)}
    >{ text }</span>
  )
}
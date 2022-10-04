import { HiOutlineExternalLink } from "react-icons/hi";

const ExternalLinkButton = ({permaLink}) => {
  return (
    <a href={permaLink} target="_blank">
    <button className="bg-white px-3 py-2 rounded-[8px] ">
      <div className="flex flex-row items-center gap-1">
        <p className="text-black font-semibold text-[12px]">Go</p>
        <HiOutlineExternalLink className="text-black mb-[2px" />
      </div>
    </button>
  </a>
  )
}
export default ExternalLinkButton
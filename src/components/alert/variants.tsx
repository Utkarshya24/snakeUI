import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineWarningAmber } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

export const alertType = {
    dark: {
        success: `bg-green-900/50 text-green-200`,
        info: `bg-blue-800/50 text-blue-200`,
        warning:`bg-yellow-800/50 text-yellow-200`,
        error: `bg-red-800/50 text-red-200`,
    },
    light: {
        success: `bg-green-500`,
        info: `bg-blue-500`,
        warning:`bg-yellow-500 text-primary-text`,
        error: `bg-red-500`,
    },
    outline: {
        success: `bg-green-900/10 border border-green-500 text-green-200`,
        info: `bg-blue-800/10 border border-blue-500- text-blue-200`,
        warning:`bg-yellow-800/10 border border-yellow-500 text-yellow-200`,
        error: `bg-red-800/10 border border-red-500 text-red-200`,
    },
    bordered: {
        success: ` border border-green-500 text-green-200`,
        info: ` border border-blue-500- text-blue-200`,
        warning:` border border-yellow-500 text-yellow-200`,
        error: ` border border-red-500 text-red-200`,
    },
    glowing: {
        success: `shadow-[0_0_20px_rgba(73,205,112,0.9)] bg-green-900/20`,
        info: ` shadow-[0_0_20px_rgba(73,132,205,0.9)] bg-blue-900/20`,
        warning:`shadow-[0_0_20px_rgba(199,205,73,0.9)] bg-yellow-900/20`,
        error: `shadow-[0_0_20px_rgba(205,73,73,0.9)] bg-red-900/20`,
    },
}


export  const icons = {
    success: <IoMdCheckmarkCircleOutline/>,
    info: <IoMdInformationCircleOutline/>,
    warning: <MdOutlineWarningAmber/>,
    error: <MdErrorOutline/>,
}

export const titles = {
    success: `Success`,
    info: `Info`,
    warning:`Warning`,
    error: `Error`,
} 
export const actions = {
    success: `Undo`,
    info: `More`,
    warning: <ImCancelCircle/>,
    error: <ImCancelCircle/>,
} 

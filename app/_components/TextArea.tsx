"use client"

import { useRecoilState } from "recoil";
import { textState } from "../_store/store";


const TextArea = () => {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (e: any) => setText(e.target.value)

    return (<div className="">
        <textarea value={text} onChange={handleChange} placeholder="Enter your text" rows={20} className="outline-none p-4 border rounded-lg w-full bg-transparent border-gray-300 hover:shadow focus:shadow-lg duration-300" />

    </div>);
}

export default TextArea;
"use client"

import { useRecoilValue } from "recoil";
import { textState } from "../_store/store";


const Credit = () => {
    const text = useRecoilValue(textState)
    const userCharLimit = 3000

    return (<div className="">
        <p className="">Credit : {userCharLimit - text.length}</p>
    </div>);
}

export default Credit;
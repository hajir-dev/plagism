"use client"

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const RecoilRootWrapper = ({ children }: Props) => {
    return (<RecoilRoot>
        {children}
    </RecoilRoot>);
}

export default RecoilRootWrapper;
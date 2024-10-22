
import { ReactNode } from "react";
import { STYMainContent } from "./mystyle";


export default function Main({children }:{children: ReactNode}) {  // Destructure and type the props
    return (
        <STYMainContent>
            {children}
        </STYMainContent>
    );
}

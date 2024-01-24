import { useSetRecoilState } from "recoil"
import { userNameAtom } from "./atoms/userDetailsArom"
import { useState } from "react"

export default function EnterUser() {
    const [userName, setUserName] = useState(0);
    const changeUser = useSetRecoilState(userNameAtom)
    return (
        <>
            <input id="userInput" onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="UserName"/>
            <button onClick={()=>{
                changeUser(userName);
            }}>Search</button>
        </>
    )
}
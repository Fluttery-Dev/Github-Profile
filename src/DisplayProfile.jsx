import { useRecoilValue } from "recoil"
import { userAtom, userNameAtom } from "./atoms/userDetailsArom"
import { useEffect } from "react";

export default function DisplayProfile() {
    const user = useRecoilValue(userAtom);

    useEffect(()=>{
        
    },[useRecoilValue(userNameAtom),user]);

    return (
    <div id="user-card">
      <div id="bg">
      </div>
    
      <div id="info">
      <div id="circle-avatar" style={{backgroundImage:`url(${user.image_url})`}}></div>
      <p><span id="title">{user.name + " "}</span><span id="age">{user.age}</span></p>
      <p id="address">{user.city}</p>
      </div>
      <hr />

      <div id='status-bar'>
        <VerticalText text1={user.following} text2={"Following"}></VerticalText>
        <VerticalText text1={user.repos} text2={"Repos"}></VerticalText>
        <VerticalText text1={user.followers} text2={"Followers"}></VerticalText>
      </div>      
    </div>
    )
}



function VerticalText({text1, text2}) {
    return (
      <div id='vtext'>
        <p id='t1'>
          {text1}
        </p>
        <p id='t2'>
          {text2}
        </p>
      </div>
    )
}
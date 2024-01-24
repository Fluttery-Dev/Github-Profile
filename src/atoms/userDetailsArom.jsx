import { atom } from "recoil";

export const userAtom = atom({
    key:"userAtom",
    default:{
        name: "Lokesh Mishra",
        age: "21",
        city: "Noida",
        followers: "500",
        following: "20",
        repos: "50",
        image_url: "src/assets/pic.jpg",
    }
})
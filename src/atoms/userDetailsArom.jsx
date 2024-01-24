import { atom, selector } from "recoil";


export const userNameAtom = atom({
    key:"userNameAtom",
    default: "fluttery-dev",
});

export const userNameSelector = selector({
    key: "userNameSelector",
    get: async({get})=>{
        const userName = get(userNameAtom);
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const data = await response.json();
            const user = {
                name: user.name,
                age: "21",
                city: user.location,
                followers: user.followers,
                following: user.following,
                image_url: user.avatar_url,
                repos: user.public_repos,
            };
            return data;
        } catch (error) {
            alert("some error occured");
            return {
                name: "Lokesh Mishra",
                age: "21",
                city: "Noida",
                followers: "500",
                following: "20",
                repos: "22",
                image_url: "src/assets/pic.jpg",
            };
        }
    }
});

export const userAtom = atom({
    key:"userAtom",
    default:userNameSelector,
});


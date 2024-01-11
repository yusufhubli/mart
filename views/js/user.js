import { navbar } from "./home.js";

document.getElementById("navbar").innerHTML = navbar



const getUsers = async()=>{
    const res = await fetch("http://localhost:5000/users",{
        headers:{
            "content-type":"application/json"
        },
        method:"GET"
    })
    const data = await res.json()
    document.getElementById("table").innerHTML = data.map((x,index)=>{
        const {name,email,phone,city,state} = x
        return `<tr>
        <td class="td">${index+1}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td><button class="u-btn">Delete</button></td>
        <td><button class="u-btn">View</button></td>
    </tr>`
    })
}
getUsers()
import { navbar } from "./home.js";

document.getElementById("navbar").innerHTML = navbar

const getItems = async()=>{
    const res = await fetch("http://localhost:5000/items",{
        headers:{
            "content-type":"application/json"
        },
        method:"GET"
    })
    const item = await res.json()
    return item
}
const data = await getItems()

document.getElementsByClassName("c-btn")[0].addEventListener("click",(e)=>{
   const category_add = document.getElementsByClassName("category-add")[0]
   category_add.style.display = "flex"
})



const add = document.getElementsByClassName("c-btn")
for(let i=0;i<add.length;i++){
  add[i].disabled = false

}

document.getElementsByClassName("input-btn")[0].addEventListener("click",async()=>{
         const value = document.getElementsByClassName("add-input")[0].value
         console.log(value)
        let li = document.createElement("li")
        li.textContent = value
        li.classList.add("flex-between","list")
        li.setAttribute("data-id",value)
        document.getElementsByClassName("cate-list")[0].appendChild(li)
        const res = await fetch("http://localhost:5000/items/category",{
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
            body:JSON.stringify({categoryName:value})
        })
        const data = await res.json()
        console.log(data)
    }
)

const catelist = document.getElementsByClassName("cate-list")[0]
catelist.addEventListener("click",(e)=>{
    
    const category = e.target.dataset.id || "vegetables"
    document.getElementById("title").innerHTML = category
    const categoryfilter = data.filter(x=>x.Category.replace(/ /g,'') == category)
    document.getElementById("table").innerHTML = categoryfilter.map((x,count)=>{
        const {_id,itemName,itemQty,itemImage,category,price}=x
        return `
        <tr class="tr">
        <td class="td">${count+1}</td>
        <td class="td1"><img class="img" src=${itemImage} alt="image"></td>
        <td class="td2">${itemName}</td>
        <td class="td3">${itemQty}</td>
        <td class="td4">${category}</td>
        <td class="td5">$${price}</td>
        <td class="td6"><input type="checkbox" value=${_id} id="check"></td>
    </tr>`
    }).join(" ")
})


const insert = document.getElementsByClassName("i-btn")[0]
const update = document.getElementsByClassName("i-btn")[1]
const remove = document.getElementsByClassName("i-btn")[2]

insert.addEventListener("click",()=>{
    console.log('insert')
    document.getElementById("table").innerHTML =`
    <div class="dd">
    <h4 class="h">Add items to Vegetable</h4>
    <label class="la" for="">Image</label>
    <input class="in" type="file">
    <label class="la" for="">Name</label>
    <input class="in" type="text">
    <label class="la" for="">Quantity</label>
    <input class="in" type="text">
    <label class="la" for="">Category</label>
    <input class="in" type="text">
    <label class="la" for="">Price</label>
    <input class="in" type="text">
    <button class="done">Done</button>
</div>`
})

update.addEventListener("click",async(e)=>{
    console.log('update')
    const res = await fetch(`http://localhost:5000/items/${e.target.id}`,{
        headers:{
            "content-type":"application/json"
        },
        method:"GET"
    }) 
     const item = await res.json()
     console.log(item)
     const {itemName,itemQty,price,category,itemImage} = item[0]
    document.getElementById("table").innerHTML =`
    <div class="dd">
    <h4 class="h">Update Item in Vegetable</h4>
    <label class="la" for="">Image</label>
    <input class="in" type="file">
    <label class="la" for="">Name</label>
    <input class="in" type="text" value=${itemName}>
    <label class="la" for="">Quantity</label>
    <input class="in" type="text" value=${itemQty}>
    <label class="la" for="">Category</label>
    <input class="in" type="text" value=${category}>
    <label class="la" for="">Price</label>
    <input class="in" type="text" value=${price}>
    <button class="done">Done</button>
</div>`

document.getElementsByClassName("done")[0].addEventListener("click",async(e)=>{
    const itemName = document.getElementsByClassName("in")[1].value
    const itemQty  = document.getElementsByClassName("in")[2].value
    const category = document.getElementsByClassName("in")[3].value
    const price = document.getElementsByClassName("in")[4].value
    // console.log(itemName,itemQty,category,price)
    const form = new FormData()
    form.set("itemName",itemName)
    form.set("itemQty",itemQty)
    form.set("category",category)
    form.set("price",price)
    const res = await fetch(`http://localhost:5000/items/item/${e.target.id}`,{
        headers:{
            "content-type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify(form)
    })
    const data = res.json()
    console.log(data)
})
})



remove.addEventListener("click",async(e)=>{
    const id = e.target.id
    const res = await fetch(`http://localhost:5000/items/${id}`,{
        headers:{
            "content-type":"application/json"
        },
        method:"DELETE"
    }) 
    const data = await res.json()
    console.log(data)
    getItems()
    //console.log(e.target.id)
})

const check = document.getElementsByTagName("table")
check[0].addEventListener("click",e=>{
    if(e.target.id == "check"){
        document.getElementsByClassName("insert")[0].style.display ="none"
        document.getElementsByClassName("edit")[0].style.display ="flex"
        //console.log(e.target.value)
        remove.setAttribute("id",e.target.value)
        update.setAttribute("id",e.target.value)
       // console.log(e.target.value)

    }
})

const cancel = document.getElementsByClassName("input-btn")[1]
cancel.addEventListener("click",()=>{
    const category_add = document.getElementsByClassName("category-add")[0]
   category_add.style.display = "none"
})



const getCate = async()=>{
    const res = await fetch("http://localhost:5000/items/category",{
        headers:{
            "content-type":"application/json"
        },
        method:"GET"
    })
    const data = await res.json()
    document.getElementsByClassName("cate-list")[0].innerHTML = data.map(x=>{
        const {categoryName} = x
        let val = categoryName.split("&")
        let category = val[0].concat(val[1])
        console.log(category)
        return `<li class="list flex-between" data-id=${categoryName.replace(/ /g,"")}>${categoryName}<input type="checkbox" value=${categoryName.replace(/ /g,"")}></li>`
    }).join(" ")

}
getCate()



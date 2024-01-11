import { navbar } from "./home.js";
import { fetchAPI } from "./test.js";

document.getElementById("navbar").innerHTML = navbar


const getOrders = async()=>{
    const data = await fetchAPI("/orders","GET",false)
    const {_id,amount,payment,orderDate} = data[0]
const {name,email,address,phone,city,state} =data[0].userId
const date = orderdate(orderDate)
    document.getElementById("table").innerHTML = data.map((x,index)=>{
        const {_id,amount} = x
const {name,city,state} =x.userId
        return `<tr class="main-tr">
        <td class="td">${index+1}</td>
        <td>${_id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${name}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td><button class="o-btn">Delete</button></td>
        <td><button class="o-btn view" data-vi=${_id}>View</button></td>
    </tr>`
    }).join(" ")
   const btn = document.querySelectorAll(".view")
   btn.forEach(btn=>{
    btn.addEventListener("click",async(e)=>{
        console.log(e.target.dataset.vi)
        const items = await fetchAPI(`/orders/${e.target.dataset.vi}`,"GET",false)
        console.log(items)
            document.getElementsByClassName("order-container")[0].innerHTML = `
            <div class="order-details">
            <div class="order">
                <h4 class="heading">Order Details</h4>
                <table class="order-table">
                    <tr class="order-tr"><td>OrderId</td><td class="gap">:</td><td>${_id}</td></tr>
                    <tr class="order-tr"><td>Amount</td><td class="gap">:</td><td>₹${amount}</td></tr>
                    <tr class="order-tr"><td>Payment</td><td class="gap">:</td><td>${payment}</td></tr>
                    <tr class="order-tr"><td>Order Date</td><td class="gap">:</td><td>${date}</td></tr>
                    <tr class="order-tr"><td>Order Status</td><td class="gap">:</td><td>Pending</td></tr>
                </table>
            </div>
            <div class="item">
                <h4 class="heading">Item Details</h4>
                <table class="order-table">
                    <tr class="order-tr"><td>Item Name</td><td class="gap">:</td><td>${items[0].itemName}</td></tr>
                    <tr class="order-tr"><td>Net Quantity </td><td class="gap">:</td><td>${items[0].itemQty}</td></tr>
                    <tr class="order-tr"><td>Price</td><td class="gap">:</td><td>₹${items[0].price}</td></tr>
                    <tr class="order-tr"><td>Category</td><td class="gap">:</td><td>${items[0].Category}</td></tr>
                    <tr class="order-tr"><td>Item Count</td><td class="gap">:</td><td>${items[0].itemCount}</td></tr>
                    <tr class="order-tr"><td>Total Price</td><td class="gap">:</td><td>₹${items[0].totalPrice}</td></tr>
                </table>
            </div>
            <div class="user">
                <h4 class="heading">Customer Details</h4>
                <table class="order-table">
                    <tr class="order-tr"><td>Customer Name</td><td class="gap">:</td><td>${name}</td></tr>
                    <tr class="order-tr"><td>Email</td><td class="gap">:</td><td>${email}</td></tr>
                    <tr class="order-tr"><td>Address</td><td class="gap">:</td><td>${address}</td></tr>
                    <tr class="order-tr"><td>City</td><td class="gap">:</td><td>${city}</td></tr>
                    <tr class="order-tr"><td>State</td><td class="gap">:</td><td>${state}</td></tr>
                    <tr class="order-tr"><td>Phone</td><td class="gap">:</td><td>${phone}</td></tr>
                </table>
            </div>
        </div>`
    })
   });
}
getOrders()


export const orderdate = (date)=>{
    const d = new Date(date)
    const month = d.getMonth()
    return `${d.getDate()+"-"+(month+1)+"-"+d.getFullYear()}`
}


export const navbar = `
<nav class=" nav">
<div class="bar">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>
</div>
<div class="flex-center">
    <h1 class="logo"><span id="part">Gro</span>
        <p id="part2">Mart</p>
    </h1><b>Admin</b>
</div>

<ul class="flex-around nav-item">
    <li><a href="/home">Home</a></li>
    <li><a href="/user">Users</a></li>
    <li><a href="/item">Products</a></li>
    <li><a href="/order">Orders</a></li>
    <li><a href="/add">Add Admins</a></li>
</ul>
</nav>
<main class=" sidebar">
<header class="header flex-between">
    <div class="flex-center">
        <h1 class="logo"><span id="part">Gro</span>
            <p id="part2">Mart</p>
        </h1><b class="">Admin</b>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor"
                class="bi bi-x-lg" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
</header>
<ul class=" nav-item2">
    <li><a href="/home">Home</a></li>
    <li><a href="/user">Users</a></li>
    <li><a href="/item">Products</a></li>
    <li><a href="/order">Orders</a></li>
    <li><a href="/">Add Admins</a></li>
</ul>
</main>`

document.getElementById("navbar").innerHTML = navbar
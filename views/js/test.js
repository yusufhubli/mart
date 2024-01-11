export const fetchAPI = async (url, method, body) => {
    try {
        console.log(body)
        if (body == false) {
            const res = await fetch(`http://localhost:5000${url}`, {
                headers: {
                    "content-type": "application/json"
                },
                method: method,
            })
            const data = await res.json()
            return data
        } else {
            const res = await fetch(`http://localhost:5000${url}`, {
                headers: {
                    "content-type": "application/json"
                },
                method: method,
                body: JSON.stringify(body)
            })
            const data = await res.json()
            return data
        }

    } catch (error) {
        console.log(error)
    }
}

const user = await fetchAPI("/orders", "GET",false)
console.log(user)

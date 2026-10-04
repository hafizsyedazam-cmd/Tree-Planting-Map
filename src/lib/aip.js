export const getUsers = async () => {
    const userdata = await fetch("https://jsonplaceholder.typicode.com/users")
    const finalData = await userdata.json()
    return(finalData)
}
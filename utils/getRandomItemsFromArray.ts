const getRandomItemsFromArray = (array:any[], n:number) => {
    const arrayTemp = [...array]
    const result = []
    while(result.length < n) {
        const randomIndex = Math.floor(Math.random() * arrayTemp.length)
        result.push(arrayTemp[randomIndex])
        arrayTemp.splice(randomIndex, 1)
    }
    return result
}
export default getRandomItemsFromArray
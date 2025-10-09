


export const getStoredData = () => {
    const storedSTR = localStorage.getItem('installedApps')
    if (storedSTR) {
        const storedId = JSON.parse(storedSTR)
        return storedId
    } else {

        return [];

    }

}




export const setUpdataStore = (id) => {
 
    const existingData = getStoredData();
    if (existingData) {
        const filterData = existingData.filter(data => data.id !== id)
        existingData.push(...filterData)

    }
    localStorage.setItem('installedApps', JSON.stringify(existingData))

    return existingData;
}



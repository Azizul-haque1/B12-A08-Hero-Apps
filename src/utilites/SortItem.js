export const sortItems  = (sortItem,installed) => {
      
  
  let sortedApps = []

    if (sortItem === 'ascending') {
        const sorted = [...installed].sort((a, b) => a.size - b.size)
        sortedApps.push(...sorted)
    }
    else if (sortItem === 'descending') {
        const sorted = [...installed].sort((a, b) => b.size - a.size)
        sortedApps.push(...sorted)
    }
    else if (sortItem === 'none') sortedApps.push(...installed)


    return sortedApps
}

 
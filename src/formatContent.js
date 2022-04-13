module.exports = (arrayContent) => {
    const titles = ['Country', 'Year', 'Area', 'Population', 'GDP per capita', 'Population density', 'Vehicle ownership', 'Total road deaths', 'Road deaths per Million Inhabitants']
    let indexTitle = {}
    const newArrayContent = []
    const arrayHeaders = arrayContent[0]

    for (const title of titles) {
        for (const i in arrayHeaders) {
            const header = arrayHeaders[i].toLowerCase().split('\n').join(' ')
            if (header.includes(title.toLowerCase())) {
                indexTitle[title] = i
                break
            }
            if (i === (arrayHeaders.length - 1).toString()) {
                indexTitle[title] = null
            }
        }
    }

    for (const i in arrayContent) {
        if (i !== "0") {
            let dictContent = {}
            const subArrayContent = arrayContent[i]
            for (const key in indexTitle) {
                const index = indexTitle[key]
                dictContent[key] = subArrayContent[index] ?? '2018'
            }
            newArrayContent.push(dictContent)
        }
    }
    
    return newArrayContent
}
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
                if (key === 'Year') {
                    dictContent[key] = '2018'
                } else {
                    const value = subArrayContent[index]
                        .replace('†a', '')
                        .replace('†b', '')
                        .replace('†c', '')
                        .replace('†d', '')
                        .replace('†e', '')
                    if (key === 'Country') {
                        dictContent[key] = value
                    } else {
                        dictContent[key] = value.replace(/,/g, "").replace('.', '')
                    }
                }
            }
            newArrayContent.push(dictContent)
        }
    }
    
    return newArrayContent
}
const getWikiData = require('./src/retriveDataFromWiki')
const exportToCsv = require('./src/exportToCsv')
startApp = async () => {
    console.log('Starting...')
    const wikiData = await getWikiData()
    exportToCsv(wikiData, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Done!')
        }
        
    })
}

startApp();
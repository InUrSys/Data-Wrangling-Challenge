const puppet = require('puppeteer');
const formatContent = require('./formatContent')

module.exports = async () =>  {
    
    const url = 'https://en.wikipedia.org/wiki/Road_safety_in_Europe'
    const browser = await puppet.launch();
    const page = await browser.newPage()

    await page.goto(url, {
        waitUntil: 'networkidle2'
    })

    await page.waitForSelector('table.wikitable.sortable.jquery-tablesorter')

    let header = await page.$$eval('thead > tr', rows => {
        return Array.from(rows, row => {
            const col = row.querySelectorAll('th');
            return Array.from(col, c => c.textContent.trim().replace(/['"]+/g, ''));
        })
    })

    let content = await page.$$eval('tbody > tr', rows => {
        return Array.from(rows, row => {
            const col = row.querySelectorAll('td');
            console.log(col)
            return Array.from(col, c => c.textContent.trim().replace(/['"]+/g, ''));
        })
    })

    await browser.close()
    
    content = content.filter(value => value.length === header[0].length)
    
    //sort 
    content = content.sort((a, b) => a[8] - b[8])
    
    content = header.concat(content)
    
    return formatContent(content)
}
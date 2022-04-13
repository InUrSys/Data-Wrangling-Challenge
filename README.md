# Data Wrangling Exercise

## About The Exercise
A simple exercise to write a script to get normalized CSV data file of Road Safety Facts and Figures in the EU.

publish the results in a git repo (GitHub). Include both script and your resulting data. 
The documentation should be included in the `README.md` file and it must be clear to follow.

More details:

* Use the following Wikipedia page and get the data from the “European Union Road Safety Facts and Figures” table: https://en.wikipedia.org/wiki/Road_safety_in_Europe

* Resulting CSV file should only include the following columns: Country, Year, Area, Population, GDP per capita, Population density, Vehicle ownership, Total road deaths, Road deaths per Million Inhabitants.
    * Note that “Year” column value is always 2018.
    
* Data should be sorted by “Road deaths per Million Inhabitants” column.

* We want a script for this and we want this script to be in python or nodejs so that you can demonstrate your knowledge of the given programming languages.
    * Your git repo should include all dependencies in standard way so that it can be run in the CI/CD.
    * Please, use simple and built-in libraries where possible rather than use a framework.
    
Bonus items (optional - extra kudos if you do either of these!):

* Make your repository into a Tabular Data Package - here’s a guide
* Build a chart from the data to display some interesting insight. Feel free to play around with the visualization.
* Make sure your chart is deployed to GitHub pages or somewhere else so we can take a look.

## Built With
* [Javascript]()
* [Node.js](https://nodejs.org/)
* [papaparse](https://www.papaparse.com/)
* [puppeteer](https://pptr.dev/)


## Installation ##
1. Install [node.js](https://nodejs.org/)

2. Clone the repo
```sh
git clone https://github.com/InUrSys/Data-Wrangling-Challenge.git
```

3. Install the packages
```sh
npm install
```

5. Run ```npm run start``` 

Then you are good to go the file will be generated at the folder `docs`

Thank you
   
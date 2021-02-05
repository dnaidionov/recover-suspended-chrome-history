// (assuming chrome wraps json in html tags to display - in my case the innermost html tag was <pre>)

(function(console){
 
    console.save = function(data, filename){
 
        if(!data) {
            console.error('Console.save: No data')
            return;
        }
 
        if(!filename) filename = 'console.json'
 
        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }
 
        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')
 
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

// your resulting json may be different - you decide which fields are important to export, just make sure to include the one containing url
var suspendedHistory = JSON.parse(document.querySelector("pre").innerText).filter(r => r.url.includes("klbibkeccnjlkjkiokjodocebajanakg")).map(r => {return ({title: r.title, lastVisited: r.lastVisitTimeLocal, lastVisitedUTC: r.lastVisitTimeUTC, url: r.url.split('uri=')[1]})}) 

console.save(suspendedHistory, "suspendedHistory.json")


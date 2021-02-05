# recover-suspended-chrome-history
Recover the urls of the tabs lost in the removal of Great Suspended extension from Chrome

Google suddenly disabled the Gret Suspender extension, and it took all the gazillions of suspended urls with them. They can still be recovered from the history, but you'd need to jump through some hoops. 

1. Install the ["Export History"](https://chrome.google.com/webstore/detail/export-historybookmarks-t/dcoegfodcnjofhjfbhegcgjgapeichlf) extension (or any other similar)
1. Export your Chrome history to file
1. Open it in Chrome
1. In Dev Tools console run the `extract-suspended-history.js` - it will save the urls of your suspended tabs into a file `suspendedHistory.json`

Each url is saved as json object:  
```
{
  "title": "Why HOSKR improves the OKR framework for digital product development | by Nick Lebesis | Medium",
  "lastvisited": "2/4/2021, 1:20:02 PM",
  "lastvisitedUTC": "2021-02-04T18:20:02.139Z",
  "url": "https://nicklebesis.medium.com/why-hoskr-improves-the-okr-framework-for-digital-product-development-d75eb02208cb"
}
```

Now you it's up to you how what to do with this. probably needs filtering, cleaning, and then there might be some tool to load it (or just write a script to open every file in json :) )

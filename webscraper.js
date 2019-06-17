const request = require('request');
const cheerio = require('cheerio');
const options = {
    url: 'https://www.reddit.com/r/news/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
}
request(options, function (error, response, html)  {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        console.log(html);
        /*
        const lgheading = $('.lg-heading');  // This scrapes a specific class from html
        console.log(lgheading.html());
        console.log(lgheading.text());   
        console.log(lgheading.find('h1').text()); 
        console.log(lgheading.children('h1').next().text());
        $('.lg-heading')                    .each(i,el) => {
          const title = $(el).find('lg-heading')
                             .text()
                             .replace(/\s\s+g, '')    // Get rid of multiple spaces
        }
        */
        const newsHeadlines = [];
        $('a[href*="/r/news/comments"] > h2').each(function() {
          newsHeadlines.push({
            title: $(this).text(),
          });
        });      
        
        console.log(newsHeadlines);
    }
})
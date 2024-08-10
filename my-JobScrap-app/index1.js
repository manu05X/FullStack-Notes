import fetch from "node-fetch";
import fs from "graceful-fs";
import { createCSV, getProxyAgent } from "./utils.js";


async function scrape(){
    let totalPage = 3337;
    let page = 1;

    while (page < totalPage) {
        const res = await fetch("https://wellfound.com/graphql?fallbackAOR=talent", {
            "headers": {
              "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "accept": "*/*",
              "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6,kn;q=0.5",
              "apollographql-client-name": "talent-web",
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-device-memory": "8",
              "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
              "sec-ch-ua-arch": "\"arm\"",
              "sec-ch-ua-full-version-list": "\"Not/A)Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"126.0.6478.183\", \"Google Chrome\";v=\"126.0.6478.183\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-model": "\"\"",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "same-origin",
              "sec-fetch-site": "same-origin",
              "x-angellist-dd-client-referrer-resource": "/location/:location",
              "x-requested-with": "XMLHttpRequest",
              "cookie": "_hjSessionUser_1444722=eyJpZCI6ImIxMGM4MDkxLTQwOTgtNWIwYy1hNzdmLTYyNWZjZGIwOGU1MiIsImNyZWF0ZWQiOjE3MjI2NTc4NTUzODksImV4aXN0aW5nIjp0cnVlfQ==; _hjSession_1444722=eyJpZCI6IjNlMTE1ZGZlLWMzZmUtNDQwZi04YzJiLTU5ZTE3Nzk4ZWViNyIsImMiOjE3MjI2NTc4NTUzOTAsInMiOjEsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MX0=; _ga=GA1.1.1812557320.1722657856; _hjHasCachedUserAttributes=true; _hjMinimizedPolls=995874; _hjDonePolls=995874; _wellfound=a07477b82ddc743c42d0fb183e5acee0; ajs_anonymous_id=ec5cc040-c946-461b-b4c8-ad45ca1fc715; _ga_705F94181H=GS1.1.1722657855.1.1.1722658453.9.0.0; datadome=RDRWtltzWWFazM7kN9WmV~g~V6AfvufD2nW2_s3mhlgtdti2aFfbNb1BLUJwxxJM6jyKz1Ylugx2Fo3zJQdcycHVkXfdm_KK7zvetfiWruz9RzJLHBGGaPhRlG8gwqMC",
              "Referer": "https://wellfound.com/location/united-states?page=628",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: '{"operationName":"SeoLandingLocationSearchPage","variables":{"location":"united-states","pag\":628},"extensions":{"operationId":"tfe/9e28da5a96ebd2fe399e335eb1f2ce6b3a1e77e2ff04e7928abe4424f941eb12"}}',
            method: "POST",
          });


/*body: '{"operationName":"SeoLandingLocationSearchPage","variables":{"page":${page}, "isRemote":false},"extensions":{"operationId":"tfe/9e28da5a96ebd2fe399e335eb1f2ce6b3a1e77e2ff04e7928abe4424f941eb12\"}}',
method: "POST",
*/

        console.log("res.status = " + res.status);
        const json = await res.json();

        const startups = json?.data?.talent?.seoLandingPageStartupsSearchResults?.startups;
        if(startups.length){
            console.log("No more startups found");
            break;
        }

        console.log("startups.length = " +startups.length);
        const existingStartups = JSON.parse(fs.readFileSync(``))
        const newStartups = [...existingStartups, ...startups];

        console.log(`Page ${page} done`);
        page++;
    }

    console.log("DONE");
}

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

console.log('Starting server...');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

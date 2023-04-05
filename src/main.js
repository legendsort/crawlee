import { PuppeteerCrawler } from 'crawlee';

const crawler = new PuppeteerCrawler({
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
    },
});

// Run the crawler


const app = async() =>  {
    const ans = await crawler.run(['https://castaicfishing.com']);
    console.log(ans);
}

app();
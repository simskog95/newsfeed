//array of objects that store article data.
var i = "hello";
var articles = [];
//run on page laod.
function initializeArticleArray(){
	articles.push({
		category: "tech",
		head: "I want to own this tiny Game Boy that fits on a keychain",
		content: "Nintendo's original Game Boy brought portable video games to the masses. Subsequent versions, like the Game Boy Pocket or the Game Boy Micro, have improved on the original design in smaller and smaller form factors. But hacker Sprite_TM may have all of Nintendo's efforts beat, with a keychain-sized functional Game Boy that he built for the 2016 Hackaday SuperConference.",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/28/13770360/game-boy-hack-sprite-tm-keychain",
		date: "2016-11-28",
		imageLink: "https://cdn3.vox-cdn.com/uploads/chorus_asset/file/7548415/keychain_redacted.jpg",
	});
	articles.push({
		category: "science",
		head: "This temporary tattoo can listen to your heart",
		content: "A new stick-on wearable sensor uses the symphony of internal rumblings, whooshing, gurglings, and cracklings to help doctors diagnose different conditions. And this souped-up, miniaturized stethoscope could one day be a way for clinicians to continuously monitor patients outside of the clinic. So far it’s been tested on chicken breasts and a very small group of people.",
		hyperLink: "http://www.theverge.com/2016/11/16/13655508/wearable-stethoscope-stick-on-temporary-tattoo-heart-voice",
		date: "2016-11-16",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/vZ6dHLMhY93guuJMfatW2gH-oX0=/0x0:5184x3456/920x613/filters:focal(2178x1314:3006x2142):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/51869857/IMG_9865.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "This new drug promises fewer days a month with migraines",
		content: "A drug to prevent migraines led to three fewer days a month with the crippling headaches in a late-stage test conducted by the pharmaceutical companies Amgen and Novartis. Though that may not seem like a lot of time, it means that people could have an extra 36 days a year without a migraine.",
		hyperLink: "http://www.theverge.com/2016/11/17/13664356/migraine-drug-headache-amgen-novartis-erenumab-phase-three-trials",
		date: "2016-11-17",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/EvMgizUKim6X_qwDfPfw0VBSF7s=/0x0:1500x1000/920x613/filters:focal(630x380:870x620):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/51885115/jbareham_160520_1061_0006.0.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "A bleak-looking sea ice graph has Twitter in a frenzy",
		content: "Climate scientists and science reporters are buzzing about a new graph showing data from the National Snow and Ice Data Center, which gives a unexpectedly bleak portrait of current sea ice area at the poles.",
		hyperLink: "http://www.theverge.com/2016/11/17/13667630/global-sea-ice-concentration-graph-science-twitter",
		date: "2016-11-17",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/_UQkRZhwNkii7BF3QARZlABihu8=/0x0:519x394/920x613/filters:focal(214x80:296x162):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/51890091/Screen_Shot_2016_11_17_at_12.36.33_PM.0.png",
	});
	articles.push({
		category: "tech",
		head: "SD cards will soon get rated for app performance",
		content: "A new classification system for SD cards is designed to help customers understand how well each product will perform when used to run apps. The first class is called A1, and has been defined as part of the Secure Digital 5.1 spec released by the SD Association, other classes will come later.",
		hyperLink: "http://www.theverge.com/2016/11/29/13773446/sd-card-app-performance-standard-5-1",
		date: "2016-11-16",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/SpriDlo6xuhveb8Awq8gQgYwlxU=/800x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/7550387/AppPerf_ShortLong2_5e87c9f45bbc8016a5c0aa97f094df5d.jpg",
	});
	articles.push({
		category: "tech",
		head: "Amazon is reportedly cracking down on fake products",
		content: "Counterfeit products have been a big problem on Amazon for years, and even a recent lawsuit claimed 90 percent of “official” chargers sold on the site are actually fake. Amazon is now finally taking action against scammers in a bid to clean its marketplace up.",
		hyperLink: "http://www.theverge.com/2016/11/29/13774318/amazon-fighting-fake-products-goods",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/5emlPZ-VOvyBVgVpurGcBldtil8=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/52040645/amazon-stock-1162.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Uber’s identity is on trial in Europe",
		content: "After years of protests, bans, and regulatory headaches, Uber is finally going to have its day in Europe’s highest court. Today, the European Court of Justice is hearing a case that could determine the ride-hailing company’s future across the EU.",
		hyperLink: "http://www.theverge.com/2016/11/29/13774118/uber-europe-court-decision-airbnb",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/XLl5JuvM4bh423NZ8bAXKV1xD7Y=/0x0:1022x681/920x613/filters:focal(430x260:592x422):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/52040683/first-click-uber-taxi.0.0.png",
	});
	articles.push({
		category: "tech",
		head: "AT&T just declared war on an open internet (and us)",
		content: "Last year we won the open internet back, but the new regulations had one big weakness: they didn’t explicitly ban a scheme called zero rating. Zero rating is a poison pill wrapped in a piece of cheese, it looks like a good thing for consumers (free video!), but ultimately has the capability to rot competition and the open internet. The FCC decided it would...",
		hyperLink: "http://www.theverge.com/2016/11/29/13774648/fcc-att-zero-rating-directv-net-neutrality-vs-tmobile",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/B_A-K-gWsvFVV54CXYI9ugla6sQ=/0x0:1024x607/920x613/filters:focal(431x223:593x385):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/52042641/vrg_tc_attarmy_1024.1480431618.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Slack looks great running on a Commodore 64",
		content: "Old technology was reincarnated this year. There was the NES Classic Edition and Kodak’s revamped Super 8 camera. And now, a software engineer named Jeff Harris is twisting the formula by bringing modern technology to the past. He wrote software that runs the popular corporate messaging service Slack on his Commodore 64.",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/29/13778420/slack-commodore-64-software-how-to-jeff-harris",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/-oeV4_I-Az2LVtT_z6winpWmR-8=/0x0:720x542/920x0/filters:focal(0x0:720x542):no_upscale()/cdn2.vox-cdn.com/uploads/chorus_asset/file/7553001/loading.gif",
	});
	articles.push({
		category: "tech",
		head: "PowerPoint for Windows now supports collaborative editing",
		content: "Microsoft is making it easier to work with others on your next PowerPoint presentation. The PowerPoint app on Windows now supports collaborative editing, allowing two or more people to jump into a document at once and make edits and comments that are seen by the entire group. This is something people have been able to do with PowerPoint Online for years,",
		hyperLink: "http://www.theverge.com/2016/11/29/13780116/microsoft-powerpoint-windows-collaborative-editing-launches",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/tOQjHzlqqLLaMUYs9HntZAhkWzE=/0x0:900x600/920x613/filters:focal(0x0:900x600):no_upscale()/cdn2.vox-cdn.com/uploads/chorus_image/image/52048485/New-to-Office-365-in-November-1.0.0.gif",
	});
	articles.push({
		category: "tech",
		head: "Google Earth’s Timelapse update illustrates 30 years of climate change",
		content: "The team behind Google Earth released an update today to the Timelapse feature of its satellite imagery app, and it’s a great way to see the rapid pace of urban development and public infrastructure projects like the San Francisco Bay Bridge. It’s a cool feature, letting anyone jump into any location and watch as is morphs over the years.",
		hyperLink: "http://www.theverge.com/2016/11/29/13785130/google-earth-timelapse-climate-change-effects",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/mXQG9Vmw2s0CqqJ-D2n9Z_sLBaU=/0x0:1428x699/920x613/filters:focal(190x121:418x349):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/52054687/Screen_Shot_2016_11_29_at_5.37.44_PM.0.png",
	});
	articles.push({
		category: "tech",
		head: "DJI reduces the maximum speed of its new Inspire 2 drone",
		content: "DJI has announced that its impressive Inspire 2 drone — announced earlier this month — will be slightly less speedy than originally planned. The Chinese drone manufacturer stated last night that the Inspire 2 would now have a top speed of 58 mph, reduced from 67 mph, and would take five seconds to reach 50 mph, not four seconds as first indicated.",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/30/13790542/dji-inspire-2-top-speed-reduced",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/-SI1kYKNOwPxG_DtUve8cR4G2Bs=/0x0:1200x800/920x613/filters:focal(504x304:696x496):format(webp)/cdn2.vox-cdn.com/uploads/chorus_image/image/52061011/dji_inspire_2.0.png",
	});
	articles.push({
		category: "tech",
		head: "Meizu’s new flagship phone is the Pro 6 Plus",
		content: "Meizu has announced the Pro 6 Plus, a more powerful version of its Pro 6 flagship phone from earlier this year. There’s a bigger, sharper screen, a new processor, a larger battery, and more.",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/30/13791010/meizu-pro-6-plus-announcement-specs-f",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/ZDm4XwUBo_2Hrg5moNWMceDsvDE=/0x0:1200x628/920x613/filters:focal(530x124:722x316):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/52061343/Cyfoj1aVEAAB9LZ.jpg_large.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Facebook blocks Prisma’s live video filters",
		content: "Russian app Prisma launched the ability to apply impressive filters to live Facebook video earlier this month. On the same day, Facebook revealed its own plans to bring filters to its Live Video feature soon. Facebook is now blocking Prisma’s Live Video access through the company’s APIs, and blaming the fact that Prisma is essentially duplicating functionality.",
		hyperLink: "http://www.theverge.com/2016/11/30/13791784/facebook-blocks-prisma-live-video-filters",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/hkiHfKLiRf683bIjlRXp9CrGRPg=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/52061993/facebook-stock-1090.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "GoPro cuts 15 percent of jobs to restructure struggling camera business",
		content: "GoPro is restructuring and cutting around 15 percent of jobs in an effort to improve its struggling business. The latest job cuts, around 200 positions, follow a cut of 7 percent of GoPro’s workforce back in January, and they include the closure of GoPro’s entertainment division",
		hyperLink: "http://www.theverge.com/2016/11/30/13792014/go-pro-job-cuts-restructuring-november-2016",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/bhCHbV6FJIVmPgGoCJ-gHiN4K08=/0x0:1920x1080/920x613/filters:focal(822x170:1128x476):format(webp)/cdn2.vox-cdn.com/uploads/chorus_image/image/52062433/vrg_vho_366_hero_session_header.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "DirecTV Now: everything you want to know",
		content: "AT&T kicked this week off with some big news: DirecTV Now, its internet TV streaming service, is here. You can sign up starting today for a free trial on a slew of platforms including smartphones, tablets, living room streaming devices, and PCs. No satellite dish or cable box required, it’s all over the web. I’ve been using DirecTV Now for a day,",
		hyperLink: "http://www.theverge.com/2016/11/30/13788934/directv-now-att-internet-tv-service-questions-pricing-channels",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/SMe1sFYDLNe8OmLn4-1tpz4rFU4=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/52062561/jbareham_161129_1299_0017.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Spark email arrives for the Mac",
		content: "Spark, a sleek and customizable email app for iPhones and iPads, is debuting on the Mac today. The free app supports a variety of email services, including Gmail, Outlook, Yahoo, iCloud, Exchange, and other IMAP services. It boasts an intelligent organization system that automatically categorizes emails into different groups and will only notify for...",
		hyperLink: "http://www.theverge.com/2016/11/30/13774998/spark-email-mac-launch",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/j4QZbrbr_rBx3XFT8vFAup3GSHw=/0x0:1920x1280/920x613/filters:focal(0x0:1920x1280):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/52042449/Devices-All-Logo.0.0.png",
	});
	articles.push({
		category: "tech",
		head: "Google’s original OnHub routers are now 40 percent off",
		content: "We’re about a week away from the release of Google’s new Wifi mesh router system. And while the spotlight may be on Wifi as the new toy in town, that doesn’t mean Google has forgotten about its first router experiment, OnHub, which is now available on Amazon for a substantial discount.",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/30/13792776/google-onhub-router-sale-cheap-wifi",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/vSGF2H40EJrOGtrMYdJqhmLv6XU=/0x0:1600x786/920x613/filters:focal(672x265:928x521):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/52067441/OnHub_20on_20counter_20with_20family_20in_20background.0.0.png",
	});
	articles.push({
		category: "tech",
		head: "YouTube now supports 4K live-streaming for both 360-degree and standard video",
		content: "YouTube now supports 4K live-streaming, allowing content creators to broadcast using high-resolution video in both 360-degree and standard video formats at a rate of 60 frames per second, the company announced today.",
		hyperLink: "http://www.theverge.com/2016/11/30/13783272/youtube-update-4k-live-streaming-support-360-video",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/_0do68CuCKPfVbMiJ2ydwsixU3k=/0x0:2040x1530/920x613/filters:focal(857x602:1183x928):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/52052947/IMG_0915-2040b.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Alphabet’s Sidewalk Labs is eyeing a contest to build its own internet city",
		content: "For months, it was rumored that Sidewalk Labs, the Google spinoff focused on smart city solutions, wanted to build its own city-within-a-city to trial self-driving cars, public Wi-Fi, new health care solutions, and other city planning advances that modern technology makes possible.",
		hyperLink: "http://www.theverge.com/2016/11/30/13793262/alphabet-sidewalk-labs-contest-internet-city-google",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/Ma4WCN2f4kaxcrdcoYblWZBQo3Y=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/52069283/LinkNYC-free_wifi-Jan2016-stock-verge-01.0.0.jpeg",
	});
	articles.push({
		category: "tech",
		head: "Using an app that remembers all my digital activity felt like putting my brain in a jar",
		content: "Atlas Recall, created by Napster co-founder Jordan Ritter, is what he calls a “juicy” idea.",
		hyperLink: "http://www.theverge.com/2016/11/30/13779488/atlas-recall-digital-history-app-hands-on-impressions",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/Zh5iaKHckwD9w0U-FuxRJsFpn9o=/0x0:1992x1150/920x613/filters:focal(392x424:710x742):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/52069841/power_through.0.png",
	});
	articles.push({
		category: "science",
		head: "Researchers send text message using chemicals",
		content: "We take it for granted that modern communication systems — everything from smartphones to the internet — use electronics to send and receive messages, but what if that weren’t the case? A group of researchers from Stanford are exploring an alternate system that uses chemicals instead of electricity as the base unit of communication,",
		hyperLink: "http://www.theverge.com/circuitbreaker/2016/11/18/13675494/chemical-signals-text-stanford-electronics",
		date: "2016-11-18",
		imageLink: "",
	});
	articles.push({
		category: "science",
		head: "NASA is looking for ideas that could make its Mars vehicles more affordable",
		content: "NASA is asking the private space industry how to make its future Mars vehicles more affordable. The agency released a Request for Information Thursday afternoon, looking for ideas that could maximize the long term efficiency and sustainability of its Exploration Systems Development (ESD) programs. Those include NASA’s next big rocket,",
		hyperLink: "http://www.theverge.com/2016/11/18/13676416/nasa-mars-request-for-information-space-launch-system-orion",
		date: "2016-11-18",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/-W3t5LEPQshaqSQ70ZuUIuiXMT4=/0x0:3840x2160/920x613/filters:focal(1644x571:2258x1185):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/51902255/sls_70mt_dac3_orange_launch_uhr2.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "This smart device sniffed my morning breath to check for gum disease",
		content: "The human mouth is a disgusting place, capable of emitting awful smells. Viruses, fungi, and possibly more than 1,000 species of bacteria live inside this dark, moist orifice. Nestled into the crevices between your gums and teeth, these microbes can sometimes cause serious health problems like tooth decay and gum disease.",
		hyperLink: "http://www.theverge.com/2016/11/19/13680544/breathometer-mint-breath-tester-cavities-gum-disease-oral-health",
		date: "2016-11-19",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/_FIPY_bqtkIgWJNcjI1Y9xO01Ig=/0x0:3840x2160/920x613/filters:focal(1613x773:2227x1387):format(webp)/cdn2.vox-cdn.com/uploads/chorus_image/image/51912837/Heather_11.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "Watch the launch of the GOES-R satellite that will revolutionize weather forecasting",
		content: "An Atlas V rocket is all set to launch this afternoon from Cape Canaveral, Florida, sending a NASA-built weather satellite into orbit. It’s the GOES-R probe, and it’s being touted as a game changer for weather forecasting. The spacecraft, which will also be operated by the National Oceanic and Atmospheric Administration,",
		hyperLink: "http://www.theverge.com/2016/11/19/13680554/nasa-noaa-goes-r-satellite-weather-ula-atlas-v-launch-livestream",
		date: "2016-11-19",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/BFdZ01uQ6q4FUua3hz07qcmNvn0=/800x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/7500297/14213119288_8c663d0db5_b.jpg",
	});
	articles.push({
		category: "science",
		head: "The University of Waterloo created a goose-tracking map, because geese are bullies",
		content: "It’s a well-documented fact that geese are surprisingly unstable jerks who will not hesitate to hurt you physically, possibly with the help of their monstrous serrated tongues. A goose is the kind of animal you’d want to avoid in a dark alley, at a house party, or say, on a college campus. An easy way to do this: don’t go where the geese go.",
		hyperLink: "http://www.theverge.com/2016/11/21/13677516/goose-watch-geese-tracking-app-university-of-waterloo",
		date: "2016-11-21",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/mHUZeFmMHhXotUqGcrEiU25X0z0=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/51941227/153852129.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "Japan’s tsunami warning system worked well in today’s major earthquake",
		content: "At 5:59AM local time Tuesday morning, a magnitude 7.4 earthquake shook the east coast of Japan. The Japan Meteorological Agency issued tsunami warnings and evacuation orders soon after the quake hit, warning of possible 10-foot waves. The quake may have been responsible for an issue at a local nuclear power plant...",
		hyperLink: "http://www.theverge.com/2016/11/21/13710204/japan-earthquake-tsunami-fukushima-daini-nuclear-plant-2016",
		date: "2016-11-21",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/o_UR2ELxc6VeHRxsKpsatC53ttE=/60x35:1164x680/920x613/filters:focal(553x259:743x449):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/51947965/Screen_Shot_2016_11_21_at_6.21.08_PM.0.png",
	});
	articles.push({
		category: "science",
		head: "These products claim to contain aloe vera — they don’t",
		content: "Skin gels said to contain aloe vera at Walmart, Target, and CVS were found to have no evidence of the plant, according to a Bloomberg News investigation. The store-brand products were tested in a lab for aloe’s chemical markers, the chemicals were absent, indicating that no actual aloe plant is in the skin gels.",
		hyperLink: "http://www.theverge.com/2016/11/22/13714916/aloe-vera-skin-gels-cvs-target-walmart-walgreens",
		date: "2016-11-22",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/foiST9m1zOGK21efAvWtgHcuzpQ=/0x0:3456x2592/920x613/filters:focal(1452x1020:2004x1572):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/51957313/Echte_Aloe_von_oben.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "How your brain tricks you into believing you’re the reasonable one",
		content: "Few people saw Donald Trump’s victory coming, including Donald Trump. There are easy culprits to blame for the surprise win (skewed polls and fake news come to mind), but the biggest enemy might be our own egos. It’s natural to ignore everything we disagree with, and many of us don’t realize that we’re biased until we’re shocked into noticing that...",
		hyperLink: "http://www.theverge.com/2016/11/23/13718636/donald-trump-psychology-confirmation-bias-truth-backfire",
		date: "2016-11-23",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/C3i8K6B8FFTHM5tWKIXydXy4Z28=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn3.vox-cdn.com/uploads/chorus_image/image/51963185/625076238.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "Trump's NASA looks good for human space exploration and terrible for Earth science",
		content: "It’s difficult to predict what a Donald Trump presidency will mean for the future of NASA. The newly elected commander in chief has said very little about his space policy plans throughout the course of his campaign. But Trump’s space advisors have made some things clear: they want the space program to focus more...",
		hyperLink: "http://www.theverge.com/2016/11/9/13574194/nasa-earth-science-trump-presidency-space-policy-private-partnerships",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/HnbaSgy7FHnJNajIPFS3WNFvIp8=/0x72:4128x2824/920x613/filters:focal(0x72:4128x2824):format(webp)/cdn2.vox-cdn.com/uploads/chorus_image/image/51758519/GettyImages-621869756.0.jpg",
	});
	articles.push({
		category: "science",
		head: "Apollo software engineer Margaret Hamilton receives Presidential Medal of Freedom",
		content: "President Obama awarded his last Presidential Medal of Freedom — the highest US honor given to a civilian — in a packed ceremony on Tuesday, according to The New York Times. Margaret Hamilton, the woman behind the onboard flight software for NASA Apollo lunar modules and command modules, was among the 21 recipients.",
		hyperLink: "http://www.theverge.com/2016/11/23/13734214/apollo-software-engineer-margaret-hamilton-presidential-medal-of-freedom",
		date: "2016-11-23",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/EGqOhH_BX5pa6BjZo2n7mAXeOMQ=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/51983345/625098110.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "Europe’s Mars lander probably crashed because of a problem with its navigation system",
		content: "The European Space Agency is still trying to figure out why its ExoMars Schiaparelli lander crashed on the surface of Mars last month, and it’s looking like it has something to do with bad data that the vehicle gathered during its descent. In an update today, the agency said that information collected by one of the lander’s instruments...",
		hyperLink: "http://www.theverge.com/2016/11/23/13734448/exomars-schiaparelli-lander-crash-why-mars-esa",
		date: "2016-11-23",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/UXQgaXVTNo1Ik5oCuftGVTuqPoM=/0x0:4000x2250/920x613/filters:focal(1680x805:2320x1445):format(webp)/cdn2.vox-cdn.com/uploads/chorus_image/image/51983781/Schiaparelli_s_heat_scorched_shield.0.jpeg",
	});
	articles.push({
		category: "science",
		head: "NASA’s Cassini spacecraft is getting ready to skim Saturn’s rings",
		content: "After 12 years of touring the Saturn system, NASA’s Cassini spacecraft is about to enter a new orbit — one that will take the probe up close to the planet’s famous rings. These Ring-Grazing Orbits, as NASA is calling them, will bring Cassini within nearly 5,000 miles of Saturn’s F ring, which marks the border of the main ring system.",
		hyperLink: "http://www.theverge.com/2016/11/28/13762994/nasa-cassini-saturn-ring-grazing-orbits-titan",
		date: "2016-11-28",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/J2By0jAJugkQYXpEDmc7P5pj0mU=/0x0:1280x720/920x613/filters:focal(538x258:742x462):no_upscale()/cdn2.vox-cdn.com/uploads/chorus_image/image/52032067/2966_CSM_Traj_wFR_RevC.0.gif",
	});
	articles.push({
		category: "science",
		head: "Google Earth’s Timelapse update illustrates 30 years of climate change",
		content: "The team behind Google Earth released an update today to the Timelapse feature of its satellite imagery app, and it’s a great way to see the rapid pace of urban development and public infrastructure projects like the San Francisco Bay Bridge. It’s a cool feature, letting anyone jump into any location and watch as is morphs over the years.",
		hyperLink: "http://www.theverge.com/2016/11/29/13785130/google-earth-timelapse-climate-change-effects",
		date: "2016-11-29",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/mXQG9Vmw2s0CqqJ-D2n9Z_sLBaU=/0x0:1428x699/920x613/filters:focal(190x121:418x349):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/52054687/Screen_Shot_2016_11_29_at_5.37.44_PM.0.png",
	});
	articles.push({
		category: "science",
		head: "FDA approves large-scale trials of ecstasy to treat PTSD",
		content: "The Food and Drug Administration (FDA) has approved the use of MDMA in large-scale clinical trials, The New York Times reports, amid emerging evidence that the illegal party drug could be used to treat post-traumatic stress disorder (PTSD).",
		hyperLink: "http://www.theverge.com/2016/11/30/13791470/fda-ecstasy-mdma-ptsd-trial",
		date: "2016-11-30",
		imageLink: "https://cdn0.vox-cdn.com/thumbor/gd5NnJ-Hww81S2qtcIpxEa96DrQ=/0x0:2000x1258/920x613/filters:focal(840x469:1160x789):format(webp)/cdn1.vox-cdn.com/uploads/chorus_image/image/52061771/Ecstacy_03.0.jpeg",
	});
}
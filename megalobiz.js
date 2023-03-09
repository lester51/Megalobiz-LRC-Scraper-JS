const axios = require("axios");
const cheerio = require('cheerio');

module.exports.searchLRC = async (query)=>{
    if ((typeof query.query === 'string' && query.query.length !== 0 && query.hasOwnProperty("query")) === false){
        return {error:`[query] is a mandatory field and must always a string.`}
    }else{
        q = query.query.replace(/ /gi,"+")
        console.log(q)
        url = `https://www.megalobiz.com/search/all?qry=${q}`;
        try {
            let { data } = await axios.get(url)
            $ = cheerio.load(data);
            listItems = $(".entity_full_member_info .entity_full_member_name div[class='pro_part mid']");
            let Q = [];
            listItems.each((idx, el) => {
                let E = {};
                E.title = $(el).children("a").attr("name")
                E.link = `https://www.megalobiz.com${$(el).children("a").attr("href")}`;
                /*
                //total time obj. is currently available
                i = $(el).children("a").attr("title").split(" ")
                E.totalTime = i[i.length-1]
                */
                Q.push(E);
            });
            return Q;
        }catch(e){
            return {error: "[ERR] Something Unexpected Happen!"}
        }
    }
}

module.exports.getLRC = async (newUrl)=>{
    try{
        let {data} = await axios.get(newUrl)
        $ = cheerio.load(data);
        lrc = $("[class='lyrics_details entity_more_info']").children("span").text();
        title = $('.profile_h1').text();
        return {title:title,lyrics:lrc}
    }catch(e){
        return {error: "[ERR] Something Unexpected Happen!"}
    }
}
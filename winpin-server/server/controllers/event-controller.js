const express = require("express");
var router = express.Router();
var request = require("request");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
var dateFormat = require("dateformat");

let date_ob = new Date();

class eventScraping {
  constructor() {
    this.date = "";
    this.events = [];
  }
}

exports.getEventList = (req, res) => {
  request("https://www.uwindsor.ca/event-calendar", (error, response, html) => {
    var obj = [];
    let currentDate = dateFormat(new Date(), "yyyy-mm-dd");
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $(".single-day td").each((i, elll) => {
        obj.push(new eventScraping());

        var date = $(elll).attr("data-date");
        date = dateFormat(new Date(date), "yyyy-mm-dd");
        if (date >= currentDate) {
          date = dateFormat(new Date(date), "dd-mmmm-yyyy");
          obj[i].date = date;
          $(elll)
            .find(".field-content a")
            .each((k, ell) => {
              obj[i].events.push({
                link: "https://www.uwindsor.ca" + $(ell).attr("href"),
                name: $(ell).find(".event-title").text(),
              });
            });
        }
      });

      res.send({ obj });
    }
  });
};

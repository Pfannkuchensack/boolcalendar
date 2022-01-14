import CSVToArray from "./csvtoarray.js";

function createAPI() {
    const rawContent = "Datum,War ich artig?,Hab ich was gegessen?\r\n1.1.2022,TRUE,TRUE\r\n2.1.2022,FALSE,TRUE\r\n3.1.2022,,TRUE\r\n4.1.2022,TRUE,TRUE\r\n5.1.2022,FALSE,TRUE"
    const content = CSVToArray(rawContent, ",");

    function calendarView() {
        let rows = content;

        // get first line
        let headlines = rows.shift();
        // remove date headline
        headlines.shift();

        let questions = headlines.map(headline => {
            return {
                question: headline,
                answers: [],
            }
        })

        rows.forEach(row => {
            const date = row.shift();
            row.forEach((answer, i) => {
                questions[i].answers.push([
                    date,
                    answer
                ])
            })
        })

        return questions;
    }

    function timelineView() {
        let copy = content;
        copy.shift()

        return copy.map(row => {
            return row[0]
        })
    }

    return {
        calendarView,
        timelineView,
    }
}

exports.createAPI = createAPI

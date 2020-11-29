exports.getEventsDB = function(ibmdb,connString) {
    return function(req, res) {
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("select EVENTID, EVENT_NAME, EVENT_DESCRIPTION, EVENT_DATE, EVENT_PASSCODE from EVENTS", 
					function(err, events, moreResultSets) {		
						if ( !err ) { 
							console.log(events)
							// console.log(events[1])  // for individual row.
							// res.render('events-db', {
							// 	"events" : events,
							// 	"tableName" : "Events",
							// 	"message": "Yeah! Select Query from Events was successful."								
							// });
							res.json(events)
						} else {
						res.send("error occurred " + err.message);
						}
				/*
					Close the connection to the database
					param 1: The callback function to execute on completion of close function.
				*/
				conn.close(function(){
					console.log("Connection Closed");
					});
				});
			}
		} );
	   
	}
	}

exports.insertEventsDB = function(ibmdb,connString) {
    return function(req, res) {
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else 
			{	console.log("Inside Insert DB");
				console.log(typeof req.body);
				console.log(req.body.eventName);
				var date = req.body.date.split('T')[0]
				var time = req.body.date.split('T')[1]   
				conn.querySync(`INSERT INTO USERS (USER_NAME,EMAIL,CONTACT) VALUES('${req.body.name}','${req.body.email}','${req.body.contact}');`)
				conn.query(`INSERT INTO EVENTS (EVENT_NAME,EVENT_DESCRIPTION,EVENT_DATE,EVENT_TIME,EVENT_PASSCODE,EVENT_URL,EVENT_STATUS,ISDELETED,USERID) VALUES('${req.body.eventName}','${req.body.eventDescription}','${date}','${time}','${req.body.passcode}','',1, 0, IDENTITY_VAL_LOCAL());`, 
					function(err, events, moreResultSets) {		
						if ( !err ) { 
							console.log("Inserted into Events tables")
							// console.log(events[1])  // for individual row.
							// res.render('events-db', {
							// 	"events" : events,
							// 	"tableName" : "Events",
							// 	"message": "Yeah! Select Query from Events was successful."								
							// });
							res.send("Inserted")
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

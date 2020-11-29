exports.getOrgDB = function(ibmdb,connString) {
    return function(req, res) {
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("select NAME, DESCRIPTION, EMAIL, CONTACT from ORGANIZATION_SIGNUP", 
					function(err, orgs, moreResultSets) {		
						if ( !err ) { 
							console.log(orgs)
							// console.log(events[1])  // for individual row.
							// res.render('orgs-db', {
							// 	"orgs" : orgs,
							// 	"tableName" : "Organization Signup",
							// 	"message": "Yeah! Select Query from Organization was successful."								
							// });
							res.json(orgs)
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

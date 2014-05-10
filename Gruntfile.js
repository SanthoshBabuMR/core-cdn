module.exports = function( grunt ) {

	// configure task(s)
	grunt.initConfig( {

		connect: {
		// connect begin
			cdnServer: {
			// cdnServer begin
				options: {
					  hostname: "localhost"
					, port: 43210
					, keepalive: true
					, middleware:	function (connect, options) {
										return [
											  function (req, res, next) {
												res.setHeader('Access-Control-Allow-Origin', '*');
												res.setHeader('Access-Control-Allow-Methods', '*');
												next();
											  }
											// Serve static files.
											, connect.static(options.base)
											// Make empty directories browsable.
											, connect.directory(options.base)
										];
							    	}
				}
			// cdnServer end
			}
		// connect end
		}	

	} );

	// load task(s)
	grunt.loadNpmTasks( "grunt-contrib-connect" );

	// register task(s)
	grunt.registerTask( "cdnServer", "connect:cdnServer" );

};

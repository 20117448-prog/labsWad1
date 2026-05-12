'use strict';


const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send('Welcome to the Gavins Playlist app!');   
  },
};


export default start;

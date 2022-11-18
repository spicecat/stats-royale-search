const ytdl = require('ytdl-core');

const getInfo = async () => {
    const a = await ytdl.getInfo('3uOgOaVclzk');
    console.log(a.player_response.microformat.playerMicroformatRenderer.description.simpleText)
    return a
}

module.exports = { getInfo };
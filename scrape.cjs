const https = require('https');
https.get('https://coverr.co/videos/interior-of-a-modern-living-room-2751', {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
  let d='';
  res.on('data', c=>d+=c);
  res.on('end', () => console.log(d.match(/https:\/\/[^\x22']+\.mp4/g)));
});

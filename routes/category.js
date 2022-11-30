var express = require('express');
var router = express.Router();

const Hyperswarm = require('hyperswarm')
const Hypercore = require("hypercore")
const Hyperbee = require("hyperbee")
const ram = require("random-access-memory")
const { once } = require("events");

const KEY = 'afe206fa1d8132889d5f1400b9bd6acdacb526ab15e49bc96fced4e85d3d154b'

let category;

async function runClient(key){
  const core = new Hypercore(ram, Buffer.from(KEY, "hex"))
  const bee = new Hyperbee(core, {keyEncoding: "utf-8", valueEncoding: "json"})
  await core.ready()

  const swarm = new Hyperswarm()
  swarm.on('connection', socket => core.replicate(socket))
  swarm.join(core.discoveryKey, { server: false, client: true })
  
  console.log('Requesting core:', core.key.toString('hex'))
  await swarm.flush()

  // Ensure we are connected to at least 1 peer (else getting simply returns null)
  if (bee.feed.writable || bee.feed.peers.length) {
    console.log("Writable or already found peers for core");
  } else {
    console.log("Waiting for peers to connect");
    const [peer] = await once(bee.feed, "peer-add");
    console.log("Connected to peer", peer.remotePublicKey);
  }
  console.log((await bee.get(key)))    
  category = await bee.get(key);
}

/* GET home page. */
router.get('/:id', async function (req, res, next) {
    await runClient(req.params.id);
    console.log(JSON.parse(category.value));
    const missionData = JSON.parse(category.value)
    res.render('category', { title: missionData[0]['categoryName'], missions: missionData });
});

module.exports = router;

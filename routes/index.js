var express = require('express');
var router = express.Router();

const Hyperswarm = require('hyperswarm')
const Hypercore = require("hypercore")
const Hyperbee = require("hyperbee")
const ram = require("random-access-memory")
const { once } = require("events");

const KEY = '4d0d55d4a96e55f4f271c316e1e658e96871de1810621ed8fe9897f03c314594'

let category;

async function runClient(){
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
  console.log((await bee.get("Category")))    
  category = await bee.get("Category");
  const readStream = await bee.createReadStream()
  // category = []
  for await (const entry of readStream){
    console.log(entry)
    //category.push(entry);
  }
}

/* GET home page. */
router.get('/', async function (req, res, next) {
  await runClient();
  console.log(category.value);
  res.render('index', { title: 'Express', category: JSON.parse(category.value) });
});

module.exports = router;

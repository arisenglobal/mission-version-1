// Server

const Hyperswarm = require('hyperswarm')
const Hypercore = require("hypercore")
const Hyperbee = require("hyperbee")
const ram = require("random-access-memory")

async function runServer(loop) {
const core = new Hypercore(ram)
const bee = new Hyperbee(core, { keyEncoding: "utf-8", valueEncoding: "json" })

await core.ready()

var jsonArr = [{
"categoryID": "1",
"categoryColor": "categoryColor",
"categoryName": "Technology",
"categoryLastName": "Missions",
"categoryURL": "categoryURL",
"categoryDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"categoryImage": "categoryImage"
}, {
"categoryID": "2",
"categoryColor": "categoryColor",
"categoryName": "Health & Wellness",
"categoryLastName": "Missions",
"categoryURL": "categoryURL",
"categoryDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"categoryImage": "categoryImage"
}, {
"categoryID": "3",
"categoryColor": "categoryColor",
"categoryName": "Water",
"categoryLastName": "Missions",
"categoryURL": "categoryURL",
"categoryDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"categoryImage": "categoryImage"
}, {
"categoryID": "4",
"categoryColor": "categoryColor",
"categoryName": "Freedom",
"categoryLastName": "Missions",
"categoryURL": "categoryURL",
"categoryDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"categoryImage": "categoryImage"
}];


var TechnologyMission = [{
"categoryID": "1",
"missionId": "01",
"missionName": "Tech mission1",
"goal": "10000000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Technology",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "1",
"missionId": "02",
"missionName": "Tech mission2",
"goal": "1000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Technology",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "1",
"missionId": "03",
"missionName": "Tech mission3",
"goal": "10000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Technology",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "1",
"missionId": "04",
"missionName": "Tech mission4",
"goal": "100000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Technology",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}];


var HealthMission = [{
"categoryID": "2",
"missionId": "01",
"missionName": "Health mission1",
"goal": "10000000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Health And Wellness",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "2",
"missionId": "02",
"missionName": "Health mission2",
"goal": "1000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Health And Wellness",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "2",
"missionId": "03",
"missionName": "Health mission3",
"goal": "10000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Health And Wellness",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "2",
"missionId": "04",
"missionName": "Health mission4",
"goal": "100000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Health And Wellness",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}];

var WaterMission = [{
"categoryID": "3",
"missionId": "01",
"missionName": "Water mission1",
"goal": "10000000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Water",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "3",
"missionId": "02",
"missionName": "Water mission2",
"goal": "1000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Water",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "3",
"missionId": "03",
"missionName": "Water mission3",
"goal": "10000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Water",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "3",
"missionId": "04",
"missionName": "Water mission4",
"goal": "100000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Water",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}];

var FreedomMission = [{
"categoryID": "4",
"missionId": "01",
"missionName": "Freedom mission1",
"goal": "10000000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Freedom",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "4",
"missionId": "02",
"missionName": "Freedom mission2",
"goal": "1000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Freedom",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "4",
"missionId": "03",
"missionName": "Freedom mission3",
"goal": "10000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Freedom",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
"categoryID": "4",
"missionId": "04",
"missionName": "Freedom mission4",
"goal": "100000",
"btcAddress": "XYZWDDDCCCMFKFMFMMFMMFMFMMFKDKMFMCKFM",
"permalink": "categoryURL",
"shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"ethAddress": "0xWEFC48j8hfu47hu4n8hf8j84f84f84dijf3",
"dogeAddress": "0dfnjdnjcn9junjnfjnvjnfxjvnvknxjkvnxkjnv",
"categoryName": "Freedom",
"image": "",
"fullDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}];
// for(i = 0 ;i < loop;i++)
// {
// var json = {
// "categoryID" : "categoryID",
// "categoryColor":"categoryColor"+i,
// "categoryName":"Technology",
// "categoryLastName":"Missions",
// "categoryURL":"categoryURL",
// "categoryDescription":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// "categoryImage":"categoryImage"
// }

// jsonArr.push(json)




// }
await bee.put("Category", JSON.stringify(jsonArr))

await bee.put("1", JSON.stringify(TechnologyMission))
await bee.put("2", JSON.stringify(HealthMission))
await bee.put("3", JSON.stringify(WaterMission))
await bee.put("4", JSON.stringify(FreedomMission))



const swarm = new Hyperswarm()
swarm.on('connection', socket => core.replicate(socket))
swarm.join(core.discoveryKey, { server: true, client: false })
await swarm.flush()

console.log('Serving core:', core.key.toString('hex'))
}

runServer(4)
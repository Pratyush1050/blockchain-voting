const IPFS = require('ipfs-api');
const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https',
headers:{
    Authorization: 'Basic ' + 'MkxyV1dsbm1hbEsxc2p2NVlNR2FHcmlpdVY3OmFiM2Y4MDQyYmQ2OTc1MTQxOWQzMTBiZWQyYjg0NWJj'
} });
export default ipfs;
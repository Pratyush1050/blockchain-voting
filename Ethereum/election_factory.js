import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x3196832A83F20D94123427B8A10Dda745b064FE2'
);

export default instance;
//0x861634Fb4a5bb74167F46228Ed98e0B0f959A2F2 second deployed address
// 0xD6cB8679D8FCB3FB43da51592ec7331C4c362dcE third  deployed address 
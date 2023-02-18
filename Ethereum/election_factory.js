import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0xb97C463F5D47151340E7b7Dd3cf86B2c5CC0309C'
);

export default instance;
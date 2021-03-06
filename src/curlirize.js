import { CurlHelper } from './lib/CurlHelper';
import logger from 'fancy-log';

export default (instance) => {
    instance.interceptors.request.use(req => {
        let curl = new CurlHelper(req);
        req.curlCommand = curl.generateCommand();
        logger.info(req.curlCommand);
        return req;
    });
}
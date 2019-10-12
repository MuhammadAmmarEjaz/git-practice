const nconf = require('nconf');
const _ = require('lodash');

const loadSetting = ({
    appSettingPath
}) => new Promise((resolve, reject) => {

    try {
        if (_.isEmpty(appSettingPath)) {
            throw new Error('Configuration path is required');
        }

        nconf.file({
            file: appSettingPath,
            logicalSeperator: '.'
        });
        resolve();

    } catch (error) {
        reject(error);
    }

});

module.exports.loadSetting = loadSetting;
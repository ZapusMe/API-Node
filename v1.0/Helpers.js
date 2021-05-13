const axios = require('axios');
const dateFormat = require('dateformat');
const fs = require("fs");
const url = 'https://zapus.me/api/v1';

module.exports = class Helpers {

    static async post(action, header = {}, body = {}) {
        return axios({
            method: 'post',
            url: url.concat(action),
            headers: header,
            data: body,
            timeout: 30000
        }).then(function (response) {
            return {'success': true, 'response': response.data};
        }).catch(function (error) {
            return {'success': false, 'response': error};
        });
    }

    static async get(action) {
        return axios({
            method: 'get',
            url: url.concat(action),
            timeout: 30000
        }).then(function (response) {
            return {'success': true, 'error': false, 'response': response.data};
        }).catch(function (error) {
            return {'success': false, 'error': error, 'response': 'Não foi possivel realizar a operação!'};
        });
    }


    static async logs(file = '', method = '', log = {}) {
        let dateTime = new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'});

        console.log('Creating log...');

        if (!fs.existsSync('./logs')) {
            fs.mkdirSync('./logs');
        }

        let stream = fs.createWriteStream(`./logs/${file}_${dateFormat(dateTime, "m-d-yyyy")}.log`,{ flags: 'a' , encoding: 'utf8'});
        stream.on('error', err => console.log('Error: ', err));

        stream.once('open', function(error) {
            stream.write("|- START register ----------------------------------------------------------------- -|\n");
            stream.write("dateTime: " + dateTime + "\n");
            stream.write("method: " + method + "\n");
            stream.write("log: " + JSON.stringify(log, null, ' ') + "\n");
            stream.write("|- END register ------------------------------------------------------------------- -|\n\n");
            stream.on('error', () => console.log('The recordings have not been completed.'));
            stream.on('finish', () => console.log('The recordings has been completed.'));
            stream.end();
        });
    }
}
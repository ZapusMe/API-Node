const helpers = require('./Helpers');

module.exports = class Auth {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise-as de forma diferente, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus.
    //webHooks => Você receberá nessa url eventos de confirmação de envio, status, ...

    //--------------------------------------------------------------------------------------------------------------

    //$webHooks => Você receberá nessa url eventos de confirmação de envio, status, ...
    static async login(apiKey, webhooks = []){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'webhookMessage' : webhooks['webhookMessage'],
            'webhookIncomingCall' : webhooks['webhookIncomingCall'],
            'webhookStateChanged' : webhooks['webhookStateChanged'],
            'webhookQrcode' : webhooks['webhookQrcode'],
            'webhookLiveLocation' : webhooks['webhookLiveLocation'],
            'webhookParticipantsChanged' : webhooks['webhookParticipantsChanged'],
            'webhookAddedToGroup' : webhooks['webhookAddedToGroup'],
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/auth/login', header, body);
        console.log(post);
        await helpers.logs('auth', 'login', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    static async logout(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {};
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/auth/logout',header,body);
        console.log(post);
        await helpers.logs('auth','logout',post);
    }

    //--------------------------------------------------------------------------------------------------------------

    static async close(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {};
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/auth/close',header,body);
        console.log(post);
        await helpers.logs('auth','close',post);
    }

    //--------------------------------------------------------------------------------------------------------------

    static async restart(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {};
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/auth/restart',header,body);
        console.log(post);
        await helpers.logs('auth','restart',post);
    }

    //--------------------------------------------------------------------------------------------------------------

    static async browserSessionToken(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {};
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/auth/browser-session-token',header,body);
        console.log(post);
        await helpers.logs('auth','browser-session-token',post);
    }

    //--------------------------------------------------------------------------------------------------------------

    static async status(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {};
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/auth/status',header,body);
        console.log(post);
        await helpers.logs('auth','status',post);
    }

    //--------------------------------------------------------------------------------------------------------------
}
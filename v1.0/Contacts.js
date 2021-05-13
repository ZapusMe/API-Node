const helpers = require('./Helpers');

module.exports = class Contacts {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise-as de forma diferente, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus.
    //chatWid => Informe o número do contato no formato id do WhatsApp. EX 5522999999999@c.us.

    //--------------------------------------------------------------------------------------------------------------

    //
    static async blockeds(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {}
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/contacts/blockeds', header, body);
        console.log(post);
        await helpers.logs('contacts', 'pin', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //type => Informe o tipo de retorno que deseja, "all" para todos, "mute" para mutados e "nomute" para desmutados.
    static async listMute(apiKey, type){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'type' : type
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/contacts/list-mute', header, body);
        console.log(post);
        await helpers.logs('contacts', 'list-mute', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getAll(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {}
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/contacts/get-all', header, body);
        console.log(post);
        await helpers.logs('contacts', 'get-all', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //block => Envie true para bloquear e false para desbloquear.
    static async block(apiKey, chatWid, block){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'block' : block,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/contacts/block', header, body);
        console.log(post);
        await helpers.logs('contacts', 'block', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //mute => Envie true para mutar um contato e false para desmutar.
    //time => Quando tempo deseja deixar o contato mutado.
    //type => Envie o período de mutação, (hours, minutes, year)
    static async mute(apiKey, chatWid, mute, time, type){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'mute' : mute,
            'time' : time,
            'type' : type,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/contacts/mute', header, body);
        console.log(post);
        await helpers.logs('contacts', 'mute', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async status(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/contacts/status', header, body);
        console.log(post);
        await helpers.logs('contacts', 'status', post);
    }

    //--------------------------------------------------------------------------------------------------------------
}
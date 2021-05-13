const helpers = require('./Helpers');

module.exports = class Chats {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise de forma diferente ou utilise algum outro parametro, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus
    //chatWid => Informe o número do contato no formato id do WhatsApp. EX 5522999999999@c.us

    //--------------------------------------------------------------------------------------------------------------

    //pin => Envie "true" para fixar o chat e false para desafixar.
    static async pin(apiKey, chatWid, pin){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'pin' : pin,
        }
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/chats/pin', header, body);
        console.log(post);
        await helpers.logs('chats', 'pin', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //zapusToo => Envie "true" para limpar as conversas do indexador do Zapus.me também e false para limpar apenas em seu WhatsApp.
    static async clear(apiKey, chatWid, zapusToo){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'zapus_too' : zapusToo,
        }
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/chats/clear', header, body);
        console.log(post);
        await helpers.logs('chats', 'clear', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //zapusToo => Envie "true" para apagar a conversa do indexador do Zapus.me também e false para apagar apenas em seu WhatsApp.
    static async delete(apiKey, chatWid, zapusToo){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'zapus_too' : zapusToo,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/chats/delete', header, body);
        console.log(post);
        await helpers.logs('chats', 'delete', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //archive => Envie true para arquivar e false para desarquivar.
    static async archive(apiKey, chatWid, archive){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'archive' : archive,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/chats/archive', header, body);
        console.log(post);
        await helpers.logs('chats', 'archive', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //chatWid => Informe o número do contato no formato id do WhatsApp para retornar uma conversa específica e vazio para retornar todas as conversas.
    static async get(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
        }
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/chats/get', header, body);
        console.log(post);
        await helpers.logs('chats', 'get', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //seen => Envie "true" para marcar o chat como lido, seu contato irá receber confirmação de leitura das mensagens enviadas por ele e "false" para marcar o chat como não lido, esse evento não remove a marcação de leitura das mensagens que seu contato enviou, apenas faz uma marcação no WhatsApp informando que não foi lido. (A marcação de lido nas mensagens será de acordo com os critérios de privacidade configurados em seu WhatsApp.)
    static async seen(apiKey, chatWid, seen){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'seen' : seen,
        }
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/chats/seen', header, body);
        console.log(post);
        await helpers.logs('chats', 'seen', post);
    }

    //--------------------------------------------------------------------------------------------------------------

}
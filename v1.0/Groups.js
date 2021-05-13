const helpers = require('./Helpers');

module.exports = class Groups {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise-as de forma diferente, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus.
    //chatWid => Informe o número do contato no formato id do WhatsApp. EX 5522999999999@c.us.
    //message => Informe sua mensagem contento junto do participante contento um @ na frente do número.
    //sendByAccount => Informe o API key do contato responsável pela mensagem.

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getAllGroups(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {}
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/groups/get-all-groups', header, body);
        console.log(post);
        await helpers.logs('groups', 'get-all-groups', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async leave(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid
        }
        //------------------------------------------------------------------------------------------------------------------

        let post = await helpers.post('/groups/leave', header, body);
        console.log(post);
        await helpers.logs('groups', 'leave', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getMembers(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/get-members', header, body);
        console.log(post);
        await helpers.logs('groups', 'get-members', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getInviteLink(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/get-invite-link', header, body);
        console.log(post);
        await helpers.logs('groups', 'get-invite-link', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //contact_wid => Informe o contato no formato id do WhatsApp.
    //type => Informe "add" para adicionar um contato e "del" para remover.
    static async addRemoveParticipant(apiKey, chatWid, contactWid, type){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'contact_wid' : contactWid,
            'type' : type,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/add-remove-participant', header, body);
        console.log(post);
        await helpers.logs('groups', 'add-remove-participant', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //type => Informe promote para promover a administrador e demote para remover despromover.
    static async promoteDemoteAdmins(apiKey, chatWid, contactWid, type){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'contact_wid' : contactWid,
            'type' : type,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/promote-demote-admins', header, body);
        console.log(post);
        await helpers.logs('groups', 'promote-demote-admins', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getAdmins(apiKey, chatWid){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/get-admins', header, body);
        console.log(post);
        await helpers.logs('groups', 'get-admins', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //inviteLink => Informe o link do grupo.
    static async getInfoFromInviteLink(apiKey, inviteLink){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'invite_link' : inviteLink
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/get-info-from-invite-link', header, body);
        console.log(post);
        await helpers.logs('groups', 'get-info-from-invite-link', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //inviteLink => Informe o link do grupo.
    static async join(apiKey, inviteLink){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'invite_link' : inviteLink
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/join', header, body);
        console.log(post);
        await helpers.logs('groups', 'join', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //name => Informe o nome do grupo.
    //participants => Informe a lista de participantes separadoras por ; e no formato id do WhatsApp.
    static async create(apiKey, name, participants){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'name' : name,
            'participants' : participants,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/create', header, body);
        console.log(post);
        await helpers.logs('groups', 'create', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //mentioneds => Informe a lista de participantes que serão mencionados na mensagens, cada participante precisa estar no formato id do WhatsApp.
    static async sendTextMentioned(apiKey, chatWid, message, mentioneds, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message' : message,
            'mentioneds' : mentioneds,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/send-text-mentioned', header, body);
        console.log(post);
        await helpers.logs('groups', 'send-text-mentioned', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //messageReplyAccessToken => access_token da mensagem que deseja responder.
    //message => Informe sua mensagem contento junto do participante contento um @ na frente do número.
    //mentioneds => Informe a lista de participantes que serão mencionados na mensagens, cada participante precisa estar no formato id do WhatsApp.
    static async sendMessageReplyWithMention(apiKey, chatWid, messageReplyAccessToken, message, mentioneds, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message_reply_access_token' : messageReplyAccessToken,
            'message' : message,
            'mentioneds' : mentioneds,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/groups/send-message-reply-with-mention', header, body);
        console.log(post);
        await helpers.logs('groups', 'send-message-reply-with-mention', post);
    }

    //--------------------------------------------------------------------------------------------------------------


}
const helpers = require('./Helpers');

module.exports = class Tools {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise-as de forma diferente, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus.
    //chatWid => Informe o número do contato no formato id do WhatsApp. EX 5522999999999@c.us.
    //sendByAccount => Api token do usuário registrado dentro do Zapus.me, todas as mensagens enviada serão vinculadas ao usuário em questão.
    //message => Você pode enviar emoticons no corpo da mensagem.

    //--------------------------------------------------------------------------------------------------------------

    //phone => Se não for enviado o código do país ex. Brasil 55, junto ao DDD e o número do seu contato, por padrão iremos assumir o código do país vinculado ao seu cadastro.
    static async haveWhatsapp(apiKey, phone){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'phone' : phone,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/have-whatsapp', header, body);
        console.log(post);
        await helpers.logs('tools', 'have-whatsapp', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //status => Informe o novo status que deseja aplicar.
    static async status(apiKey, status){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'status' : status,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/profile/status', header, body);
        console.log(post);
        await helpers.logs('tools', 'status', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //name => Informe o nome de perfil que deseja aplicar.
    static async name(apiKey, name){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'name' : name,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/profile/name', header, body);
        console.log(post);
        await helpers.logs('tools', 'name', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //photo => Informe a foto no formato base64 data uri.
    static async picture(apiKey, photo){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'photo' : photo,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/profile/picture', header, body);
        console.log(post);
        await helpers.logs('tools', 'picture', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //phone => Se não for enviado o código do país ex. Brasil 55, junto ao DDD e o número do seu contato, por padrão iremos assumir o código do país vinculado ao seu cadastro.
    static async getPicture(apiKey, phone){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'phone' : phone,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/profile/get-picture', header, body);
        console.log(post);
        await helpers.logs('tools', 'get-picture', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async device(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {}
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/profile/device', header, body);
        console.log(post);
        await helpers.logs('tools', 'device', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async restartService(apiKey){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {}
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/restart-service', header, body);
        console.log(post);
        await helpers.logs('tools', 'restart-service', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //chatWid => Se informado iremos sincronizar apenas o chat em questão, para sincronizar todos os chats basta deixar esse parâmetro vazio. Informe o contato no formato id do WhatsApp.
    //onlyFiles => Envie true para sincronizar apenas mensagens com arquivos (gif, vídeos, imagens, documentos, stickers e etc..), envie false para sincronizar apenas mensagens que não contenha arquivos.
    static async syncWhatsApp(apiKey, chatWid, onlyFiles){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'only_files' : onlyFiles,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/tools/sync-whatsApp', header, body);
        console.log(post);
        await helpers.logs('tools', 'sync-whatsApp', post);
    }

    //--------------------------------------------------------------------------------------------------------------

}
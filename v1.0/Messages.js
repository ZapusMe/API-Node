const helpers = require('./Helpers');

module.exports = class Messages {
    //As descrições contidas aqui, servem para todos os metodos.
    //Caso algum metodo utilise-as de forma diferente, tera uma descrição na parte superior do metodo.
    //apiKey => Sua chave de acesso a api do Zapus.
    //chatWid => Informe o número do contato no formato id do WhatsApp. EX 5522999999999@c.us.
    //sendByAccount => Api token do usuário registrado dentro do Zapus.me, todas as mensagens enviada serão vinculadas ao usuário em questão.
    //message => Você pode enviar emoticons no corpo da mensagem.

    //--------------------------------------------------------------------------------------------------------------

    //typing => Envie "true" para exibir a mensagem de digitando no WhatsApp do seu contato e "false" para cancelar o evento. O evento de digitação se não cancelado, será encerrado automaticamente após 30 segundos.
    static async smartTyping(apiKey, chatWid, typing){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'typing' : typing,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/smart-typing', header, body);
        console.log(post);
        await helpers.logs('messages', 'smart-typing', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //recording => Envie "true" para exibir a mensagem de gravando áudio no WhatsApp do seu contato e "false" para cancelar o evento. O evento de gravando áudio se não cancelado, será encerrado automaticamente após 30 segundos.
    static async smartRecording(apiKey, chatWid, recording){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'recording' : recording,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/smart-recording', header, body);
        console.log(post);
        await helpers.logs('messages', 'smart-recording', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async sendMessageText(apiKey, chatWid, message, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message' : message,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-message-text', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-message-text', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //contactPhone => Número do contato que deseja compartilhar no formato id do WhatsApp.
    //contactName =>  Nome do contato que deseja compartilhar.
    static async sendContactVcard(apiKey, chatWid, contactPhone, contactName, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'contact_phone' : contactPhone,
            'contact_name' : contactName,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-contact-vcard', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-contact-vcard', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //contactList => Informe os números dos contatos separados por vírgula. Faremos uma verificação para saber se os contatos possuem WhatsApp antes do envio.
    static async sendContactVcardList(apiKey, chatWid, contactList, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'contact_list' : contactList,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-contact-vcard-list', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-contact-vcard-list', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //latitude => Envie a latitude do endereço, obrigatório para o WhatsApp carregar o mapa.
    //longitude => Envie a longitude do endereço, obrigatório para o WhatsApp carregar o mapa.
    //address => Endereço a ser enviado.
    static async sendLocation(apiKey, chatWid, latitude, longitude, address, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'latitude' : latitude,
            'longitude' : longitude,
            'address' : address,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-location', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-location', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //file => Enviar em base64 do tipo Data Uri, envie gif com no máximo 512x512. Dê preferência a gif quadrados com no máximo 1mb, ter uma melhor performance. ('image/gif', 'image/png', 'image/jpg', 'image/jpeg')
    static async sendImageAsSticker(apiKey, chatWid, file, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'file' : file,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-image-as-sticker', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-image-as-sticker', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //link => url que você deseja enviar ao contato.
    static async sendLinkPreview(apiKey, chatWid, link, message, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'link' : link,
            'message' : message,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-link-preview', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-link-preview', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //messageReplyAccessToken => access_token gerado pelo Zapus.me para cada mensagem enviada ou recebida.
    static async sendMessageReply(apiKey, chatWid, messageReplyAccessToken, message, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message_reply_access_token' : messageReplyAccessToken,
            'message' : message,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-message-reply', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-message-reply', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //messageForwardAccessToken => access_token gerado pelo Zapus.me para cada mensagem enviada ou recebida.
    static async sendForwardMessage(apiKey, chatWid, messageForwardAccessToken, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message_forward_access_token' : messageForwardAccessToken,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-forward-message', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-forward-message', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //messageAccessToken => access_token gerado pelo Zapus.me para cada mensagem enviada ou recebida.
    static async delete(apiKey, chatWid, messageAccessToken){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'message_access_token' : messageAccessToken,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/delete', header, body);
        console.log(post);
        await helpers.logs('messages', 'delete', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //file => Enviar em base64 do tipo Data Uri.
    //filename => Nome da imagem/arquivo com extensão.
    //caption => Sua mensagem ou descrição sobre a imagem.
    static async sendMessageImage(apiKey, chatWid, file, filename, caption, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'file' : file,
            'filename' : filename,
            'caption' : caption,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-message-image', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-message-image', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //file => Enviar em base64 do tipo Data Uri.
    //filename => Nome da imagem/arquivo com extensão.
    //caption => Sua mensagem ou descrição sobre o arquivo.
    static async sendMessageFile(apiKey, chatWid, file, filename, caption, sendByAccount){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'file' : file,
            'filename' : filename,
            'caption' : caption,
            'send_by_account' : sendByAccount,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/send-message-file', header, body);
        console.log(post);
        await helpers.logs('messages', 'send-message-file', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //shippingStatus => Filtrar as mensagens por status do envio, esse status se refere ao envio feito pelo Zapus.me. sent = enviado, failed = falha "será feita uma nova tentativa a cada 5 minutos", queued = envio agendado, cancelled = cancelado, daily_limit = limite diário de envio atingido, error = se ocorrer um erro no envio, all = todo os status.
    //source => Origem da mensagem, se foi enviada ou recebida. in = enviado, out = recebeu (se usar out não a necessidade de usar o parâmetro shipping_status) ou all = enviado e recebido.
    //messageType => chat = texto simples c/ ou s/ emoticons, document = arquivos, image = imagens, location = localização, link = link preview, ptt = audio gravado no WhatsApp, audio = audio em geral, video = vídeos e gif, sticker = sticker animados ou não, vcard = contato, multi_vcard = lista de contato e all = qualquer tipo.
    //messageAck =>  Filtrar por status da mensagem dentro do WhatsApp. 0 = aguardando envio, 1 = entregue no servidor, -1 = mensagem com erro, 2 = entregue no WhatsApp do seu contato, 3 = mensagem lida pelo seu contato, 4 = mensagem assistida "geralmente usado em vídeos" all = todos os status. O controle de privacidade do seu contato pode afetar a confirmação de leitura.
    //messageWid => Id da mensagem fornecido pelo WhatsApp. Se você informar este parâmetro, demais parametros serão ignorados com exceção do phone_to.
    //accessToken => Token da mensagem gerado pelo Zapus.me no momento da solicitação de envio. Se você informar este parâmetro, demais parametros serão ignorados com exceção do phone_to.
    //dateStart => Informe uma data de início para filtrar a partir desta data. (Formato: Y-m-d)
    //dateEnd => Informe uma data limite para filtrar até esta data. (Formato: Y-m-d)
    static async findMessages(apiKey, chatWid, shippingStatus, source, messageType, messageAck, messageWid, accessToken, dateStart, dateEnd){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'chat_wid' : chatWid,
            'shipping_status' : shippingStatus,
            'source' : source,
            'message_type' : messageType,
            'message_ack' : messageAck,
            'message_wid' : messageWid,
            'access_token' : accessToken,
            'date_start' : dateStart,
            'date_end' : dateEnd,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/find-messages', header, body);
        console.log(post);
        await helpers.logs('messages', 'find-messages', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //messageWid => Informe o id da mensagem no WhatsApp para retornar o acess_token de nosso indexador.
    //accessToken => Informe o access_token de uma mensagem indexada para retornar o id da mensagem no WhatsApp.
    static async get(apiKey, messageWid, accessToken){
        let header = {
            'Connection' : 'keep-alive',
            'content-type' : 'application/json',
            'apiKey' : apiKey
        };

        let body = {
            'message_wid' : messageWid,
            'access_token' : accessToken,
        }
        //------------------------------------------------------------------------------------------------------------------
        let post = await helpers.post('/messages/get', header, body);
        console.log(post);
        await helpers.logs('messages', 'get', post);
    }

    //--------------------------------------------------------------------------------------------------------------

    //
    static async getFile(accessToken){
        let get = await helpers.get(`/messages/get-file/${accessToken}`);
        console.log(get);
        await helpers.logs('messages', 'get-file', get);
    }

    //--------------------------------------------------------------------------------------------------------------

}
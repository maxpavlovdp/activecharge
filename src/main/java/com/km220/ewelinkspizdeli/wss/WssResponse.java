package com.km220.ewelinkspizdeli.wss;


import com.km220.ewelinkspizdeli.wss.wssrsp.WssRspMsg;

public interface WssResponse {

    void onMessage(String s);

    void onMessageParsed(WssRspMsg rsp);

    void onError(String error);
}

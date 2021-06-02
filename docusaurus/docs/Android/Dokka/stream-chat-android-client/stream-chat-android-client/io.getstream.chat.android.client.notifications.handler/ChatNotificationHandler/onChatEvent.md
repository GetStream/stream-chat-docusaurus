---
title: on-chat-event
---
//[stream-chat-android-client](../../../index.md)/[io.getstream.chat.android.client.notifications.handler](../index.md)/[ChatNotificationHandler](index.md)/[onChatEvent](onChatEvent.md)



# onChatEvent  
[androidJvm]  
Content  
open fun [onChatEvent](onChatEvent.md)(event: [NewMessageEvent](../../io.getstream.chat.android.client.events/NewMessageEvent/index.md)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)  
More info  


Handles showing notification after receiving [NewMessageEvent](../../io.getstream.chat.android.client.events/NewMessageEvent/index.md) from other users. Default implementation loads necessary data and displays notification even if app is in foreground.



#### Return  


false if notification should be handled internally

  




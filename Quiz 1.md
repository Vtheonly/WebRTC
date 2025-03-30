---
sources:
  - "[[Deepseek/node_modules/ws/README]]"
  - "[[ChatGPT/node_modules/ws/README]]"
---
> [!question] Which of the following is true regarding the `ws` module and browser compatibility?
> a) The `ws` module works directly in the browser without modification.
> b) Browser clients must use the native `WebSocket` object.
> c) The `ws` module can be used in the browser with minor code adjustments.
> d) The `ws` documentation refers to browser clients when mentioning 'client'.
>> [!success]- Answer
>> b) Browser clients must use the native `WebSocket` object.

> [!question] What is the purpose of the `permessage-deflate` extension in the context of the `ws` module?
> a) It enables encryption of WebSocket messages.
> b) It allows the client and server to negotiate a compression algorithm for message payloads.
> c) It provides a mechanism for client authentication.
> d) It automatically detects and closes broken connections.
>> [!success]- Answer
>> b) It allows the client and server to negotiate a compression algorithm for message payloads.

> [!question] Based on the text, what is a potential issue when using `permessage-deflate` with high concurrency, especially on Linux?
> a) Increased CPU usage due to encryption overhead.
> b) Memory fragmentation and slow performance due to issues with Node.js and zlib.
> c) Incompatibility with older versions of Node.js.
> d) Difficulty in configuring the extension parameters.
>> [!success]- Answer
>> b) Memory fragmentation and slow performance due to issues with Node.js and zlib.


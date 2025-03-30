---
sources:
  - "[[ROO/index]]"
  - "[[Grok/index]]"
  - "[[Gemini/index]]"
  - "[[server]]"
  - "[[Deepseek/index]]"
  - "[[ChatGPT/index]]"
---
> [!question] The `____` API is used to access the user's microphone.  The `____` object is central to WebRTC, enabling communication between peers.  The `____` event is fired when a new ICE candidate is available. SDP stands for `____`.
>> [!success]- Answer
>> navigator.mediaDevices.getUserMedia, RTCPeerConnection, onicecandidate, Session Description Protocol

> [!question] To establish a WebRTC connection, an `____` is created by the initiator and sent to the remote peer. The remote peer then creates an `____` and sends it back. This process is facilitated through a `____` server.
>> [!success]- Answer
>> offer, answer, signaling

> [!question] ICE candidates are exchanged to find the best `____` path between peers. The `____` element is used to play audio in the browser.  `pc.addTrack(track, stream)` adds a `____` to the peer connection. `pc.ontrack` is fired when pc receives audio or video `____` from remote peer.
>> [!success]- Answer
>> network, <audio>, track, streams

> [!question] In a simple WebRTC implementation, the `____` object from `getUserMedia` is assigned to the `srcObject` of an `____` element to play the local audio.  The remote peer's audio stream is also attached to an audio element's `____` property.
>> [!success]- Answer
>> stream, audio, srcObject

> [!question] The `createOffer()` method in WebRTC returns a `____`. The `____` function is used to prompt for text in javascript. The example with WebSockets uses `ws.send()` to send a `____` message
>> [!success]- Answer
>> Promise, prompt(), stringified JSON

> [!question] Before sending the offer and answer, they must be set as the `____` using `setLocalDescription()`. The remote peer's offer or answer is set using `____`.
>> [!success]- Answer
>> local description, setRemoteDescription()

> [!question] A STUN server is used to discover the `____` IP address and port of a peer. A `____` server handles real-time communication.
>> [!success]- Answer
>> public, WebRTC

> [!question] The code `stream.getTracks().forEach(track => pc1.addTrack(track, stream))` iterates through each `____` in the `____` and adds it to the `____`.
>> [!success]- Answer
>> track, stream, RTCPeerConnection

> [!question] Match the WebRTC term to its description.
>> [!example] Group A
>> a) getUserMedia
>> b) Signaling Server
>> c) Offer
>> d) ICE Candidate
>> e) STUN Server
>> f) onicecandidate event
>> g) RTCPeerConnection
>> h) Answer
>> i) ontrack event
>
>> [!example] Group B
>> n) A server that helps peers exchange SDP and ICE candidates.
>> o) An SDP message describing the local session, created by the initiating peer.
>> p) Contains information about how to connect to a peer.
>> q) Event fired when an ICE candidate becomes available.
>> r) Represents a WebRTC connection between the local computer and a remote peer.
>> s) Helps peers discover their public IP address and port.
>> t) API for accessing the user's microphone and camera.
>> u) An SDP message responding to an offer, created by the receiving peer.
>> v) Event fired when a remote stream is added to the RTCPeerConnection.
>
>> [!success]- Answer
>> a) -> t)
>> b) -> n)
>> c) -> o)
>> d) -> p)
>> e) -> s)
>> f) -> q)
>> g) -> r)
>> h) -> u)
>> i) -> v)

> [!question] Match the JavaScript function with its purpose in the WebRTC context.
>> [!example] Group A
>> a) pc.setRemoteDescription()
>> b) pc.addIceCandidate()
>> c) pc.createOffer()
>> d) pc.setLocalDescription()
>> e) pc.createAnswer()
>
>> [!example] Group B
>> n) Initiates the creation of an SDP offer.
>> o) Creates an SDP answer in response to an offer
>> p) Adds an ICE candidate to the peer connection.
>> q) Sets the remote description of the peer connection.
>> r) Sets the local description of the peer connection.
>
>> [!success]- Answer
>> a) -> q)
>> b) -> p)
>> c) -> n)
>> d) -> r)
>> e) -> o)

> [!question] Match the HTML element with its use.
>> [!example] Group A
>> a) srcObject
>> b) <button>
>> c) <audio>
>
>> [!example] Group B
>> n) Used to embed audio content.
>> o) Used to create interactive buttons, such as 'Start' and 'Stop'.
>> p) Property used to connect stream to audio object
>
>> [!success]- Answer
>> a) -> p)
>> b) -> o)
>> c) -> n)

> [!question] Match the WebSocket event to the correct action
>> [!example] Group A
>> a) onopen
>> b) onerror
>> c) onclose
>> d) onmessage
>
>> [!example] Group B
>> n) Triggered when receiving data
>> o) Triggered when the connection is closed
>> p) Handles WebSocket errors
>> q) Triggered when connection is established
>
>> [!success]- Answer
>> a) -> q)
>> b) -> p)
>> c) -> o)
>> d) -> n)

> [!question] Match the code snippet to the action
>> [!example] Group A
>> a) new RTCPeerConnection()
>> b) navigator.mediaDevices.getUserMedia({ audio: true })
>> c) stream.getTracks().forEach(track => pc1.addTrack(track, stream))
>
>> [!example] Group B
>> n) Add all audio tracks to peer connection
>> o) Creates a peer connection
>> p) Request microphone access
>
>> [!success]- Answer
>> a) -> o)
>> b) -> p)
>> c) -> n)

> [!question] Match terms and definitions
>> [!example] Group A
>> a) STUN
>> b) ICE
>> c) SDP
>
>> [!example] Group B
>> n) Session Traversal Utilities for NAT
>> o) Interactive Connectivity Establishment
>> p) Session Description Protocol
>
>> [!success]- Answer
>> a) -> n)
>> b) -> o)
>> c) -> p)

> [!question] Match each method or property with its related object within the WebRTC and WebSocket context.
>> [!example] Group A
>> a) getUserMedia
>> b) onicecandidate
>> c) ontrack
>> d) send
>> e) onmessage
>> f) createOffer
>
>> [!example] Group B
>> n) RTCPeerConnection
>> o) WebSocket
>> p) navigator.mediaDevices
>> q) WebSocket
>> r) RTCPeerConnection
>> s) RTCPeerConnection
>
>> [!success]- Answer
>> a) -> p)
>> b) -> n)
>> c) -> n)
>> d) -> o)
>> e) -> o)
>> f) -> n)

> [!question] Match javascript method with its correct use.
>> [!example] Group A
>> a) JSON.stringify()
>> b) JSON.parse()
>> c) prompt()
>
>> [!example] Group B
>> n) Convert a JSON string into a JavaScript object
>> o) Convert a JavaScript object into a JSON string
>> p) Creates input prompt box
>
>> [!success]- Answer
>> a) -> o)
>> b) -> n)
>> c) -> p)


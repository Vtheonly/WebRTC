<!DOCTYPE html>
<html>
<body>
    <button onclick="startBroadcast()">Start Broadcast</button>
    <button onclick="subscribe()">Subscribe</button>
    <audio id="audio" autoplay></audio>
<script>
const ws = new WebSocket('ws://localhost:8080');
let pc = new RTCPeerConnection();

async function startBroadcast() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(track => pc.addTrack(track, stream));
    
    pc.onicecandidate = e => e.candidate && ws.send(JSON.stringify(e.candidate));
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    ws.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));
}

async function subscribe() {
    pc.ontrack = e => document.getElementById('audio').srcObject = e.streams[0];
    
    pc.onicecandidate = e => e.candidate && ws.send(JSON.stringify(e.candidate));
    ws.onmessage = async ({ data }) => {
        const msg = JSON.parse(data);
        if (msg.type === "offer") await handleOffer(msg.sdp);
        if (msg.type === "answer") await pc.setRemoteDescription(msg);
        if (msg.candidate) await pc.addIceCandidate(msg);
    };
}

async function handleOffer(sdp) {
    await pc.setRemoteDescription({ type: "offer", sdp });
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    ws.send(JSON.stringify({ type: "answer", sdp: answer.sdp }));
}
</script>
</body>
</html>
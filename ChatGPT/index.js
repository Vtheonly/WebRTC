const servers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
const peerConnections = {};



// const socket = new WebSocket('wss://your-signaling-server.com');






const WebSocket = require('ws'); // Import ws package
const socket = new WebSocket('wss://your-signaling-server.com');

socket.on('open', () => {
    console.log('Connected to the signaling server');
});

socket.on('message', (data) => {
    console.log('Received:', data.toString());
});

socket.on('error', (err) => {
    console.error('WebSocket error:', err);
});

socket.on('close', () => {
    console.log('Connection closed');
});



const audio = document.createElement('audio');
audio.autoplay = true;
document.body.appendChild(audio);

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const localAudio = document.createElement('audio');
    localAudio.srcObject = stream;
    localAudio.muted = true;
    localAudio.autoplay = true;
    document.body.appendChild(localAudio);

    socket.onmessage = async ({ data }) => {
        const message = JSON.parse(data);
        if (message.type === 'offer') {
            const pc = new RTCPeerConnection(servers);
            peerConnections[message.id] = pc;
            pc.ontrack = e => (audio.srcObject = e.streams[0]);
            stream.getTracks().forEach(track => pc.addTrack(track, stream));
            await pc.setRemoteDescription(new RTCSessionDescription(message.offer));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            socket.send(JSON.stringify({ type: 'answer', id: message.id, answer }));
        } else if (message.type === 'answer') {
            await peerConnections[message.id].setRemoteDescription(new RTCSessionDescription(message.answer));
        } else if (message.type === 'candidate') {
            await peerConnections[message.id].addIceCandidate(new RTCIceCandidate(message.candidate));
        }
    };

    socket.onopen = () => {
        const pc = new RTCPeerConnection(servers);
        peerConnections['host'] = pc;
        stream.getTracks().forEach(track => pc.addTrack(track, stream));
        pc.onicecandidate = e => {
            if (e.candidate) {
                socket.send(JSON.stringify({ type: 'candidate', id: 'host', candidate: e.candidate }));
            }
        };
        pc.createOffer().then(offer => {
            pc.setLocalDescription(offer);
            socket.send(JSON.stringify({ type: 'offer', id: 'host', offer }));
        });
    };
});

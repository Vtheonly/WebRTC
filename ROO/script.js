// script.js
let localStream;
let peerConnection;
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const localAudio = document.getElementById('localAudio');
const remoteAudio = document.getElementById('remoteAudio');

startBtn.addEventListener('click', async () => {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        localAudio.srcObject = localStream;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    } catch (error) {
        console.error('Error accessing microphone:', error);
    }
});

stopBtn.addEventListener('click', () => {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localAudio.srcObject = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

connectBtn.addEventListener('click', async () => {
    if (!localStream) {
        alert('Please start recording first.');
        return;
    }

    // Placeholder for signaling - replace with your signaling server logic
    // In a real application, you'd use a signaling server (e.g., Socket.IO, WebSockets)
    // to exchange SDP offers/answers and ICE candidates.
    // For this bare-bones example, we'll simulate the signaling process.

    peerConnection = new RTCPeerConnection();

    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = event => {
        remoteAudio.srcObject = event.streams[0];
    };

    // Simulate offer/answer exchange (replace with signaling server)
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // In a real application, you'd send the offer to the remote peer
    // and receive their answer.  For this example, we'll simulate the answer.
    // Assume the remote peer has the following code:
    // const remotePeerConnection = new RTCPeerConnection();
    // remotePeerConnection.ontrack = event => { remoteAudio.srcObject = event.streams[0]; };
    // remotePeerConnection.setRemoteDescription(offer);
    // const answer = await remotePeerConnection.createAnswer();
    // await remotePeerConnection.setLocalDescription(answer);
    // send answer back to the original peer

    // Simulate receiving the answer
    const answer = await createAnswer(offer);
    await peerConnection.setRemoteDescription(answer);

    connectBtn.disabled = true;
    disconnectBtn.disabled = false;
});

disconnectBtn.addEventListener('click', () => {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
        remoteAudio.srcObject = null;
    }
    disconnectBtn.disabled = true;
    connectBtn.disabled = false;
});

// Simulate creating an answer (replace with remote peer logic)
async function createAnswer(offer) {
    const remotePeerConnection = new RTCPeerConnection();
    remotePeerConnection.setRemoteDescription(offer);
    const answer = await remotePeerConnection.createAnswer();
    await remotePeerConnection.setLocalDescription(answer);
    return answer;
}
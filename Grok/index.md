<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebRTC Audio Podcast</title>
</head>
<body>
    <button id="start">Start Broadcasting</button>
    <audio id="remoteAudio" autoplay></audio>
    <script>
        document.getElementById('start').addEventListener('click', async () => {
            // Request microphone access
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Create peer connections for broadcaster (pc1) and listener (pc2)
            const pc1 = new RTCPeerConnection();
            const pc2 = new RTCPeerConnection();
            
            // Add audio tracks from the stream to the broadcaster's peer connection
            stream.getTracks().forEach(track => pc1.addTrack(track, stream));
            
            // Handle ICE candidates for pc1 and send them to pc2
            pc1.onicecandidate = event => {
                if (event.candidate) {
                    pc2.addIceCandidate(event.candidate);
                }
            };
            
            // Handle ICE candidates for pc2 and send them to pc1
            pc2.onicecandidate = event => {
                if (event.candidate) {
                    pc1.addIceCandidate(event.candidate);
                }
            };
            
            // When pc2 receives the audio stream, attach it to the audio element
            pc2.ontrack = event => {
                document.getElementById('remoteAudio').srcObject = event.streams[0];
            };
            
            // Create and exchange offer and answer to establish the connection
            const offer = await pc1.createOffer();
            await pc1.setLocalDescription(offer);
            await pc2.setRemoteDescription(pc1.localDescription);
            const answer = await pc2.createAnswer();
            await pc2.setLocalDescription(answer);
            await pc1.setRemoteDescription(pc2.localDescription);
        });
    </script>
</body>
</html>
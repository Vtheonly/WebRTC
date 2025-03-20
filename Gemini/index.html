<!DOCTYPE html>
<html>
<head>
  <title>Simple Podcast</title>
</head>
<body>
  <audio id="localAudio" autoplay muted></audio>
  <audio id="remoteAudio" autoplay></audio>

  <button id="startButton">Start Broadcast</button>
  <button id="joinButton">Join Broadcast</button>

  <script>
    const localAudio = document.getElementById('localAudio');
    const remoteAudio = document.getElementById('remoteAudio');
    const startButton = document.getElementById('startButton');
    const joinButton = document.getElementById('joinButton');

    let localStream;
    let pc1; // PeerConnection for broadcaster
    let pc2; // PeerConnection for listener

    // SDP Offer/Answer handling (Signaling - simplified using a textarea for demonstration)
    let offer;
    let answer;

    startButton.addEventListener('click', startBroadcast);
    joinButton.addEventListener('click', joinBroadcast);



    async function startBroadcast() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        localAudio.srcObject = localStream;

        pc1 = new RTCPeerConnection();

        localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));

        pc1.onicecandidate = event => {
          if (event.candidate) {
            // In a real app, send this candidate to the other peer via a signaling server.
            console.log("Broadcaster ICE Candidate:", event.candidate);  //For debugging, show the candidate
            //Simplified by showing the offer/answer in the console.
          }
        };

        offer = await pc1.createOffer();
        await pc1.setLocalDescription(offer);
        console.log("Offer:", offer);  // Log the Offer SDP.  Copy this.

      } catch (error) {
        console.error('Error starting broadcast:', error);
      }
    }




    async function joinBroadcast() {
        try{
            pc2 = new RTCPeerConnection();

            pc2.onicecandidate = event => {
            if (event.candidate) {
                // Send this candidate to the other peer (broadcaster).
                 console.log("Listener ICE Candidate:", event.candidate); //For debugging, show the candidate
                 //Simplified by showing the offer/answer in the console.
            }
            };

            pc2.ontrack = event => {
                remoteAudio.srcObject = event.streams[0];
            };

            // --- Get Offer from console, create answer ---

            let offerFromConsole = prompt("Paste the Offer SDP from the broadcaster:"); //get the offer SDP
            if (!offerFromConsole) {
                alert("You must provide the Offer SDP.");
                return;
            }

            const remoteOffer = new RTCSessionDescription(JSON.parse(offerFromConsole)); //parse it from text
            await pc2.setRemoteDescription(remoteOffer);

            answer = await pc2.createAnswer();
            await pc2.setLocalDescription(answer);
            console.log("Answer:", answer); // Log the Answer SDP. Copy this.

            // --- Get Answer (from Console) to Broadcaster ---
            let answerFromConsole = prompt("Paste the Answer SDP (from the listener - this prompt) to the broadcaster:"); //Get the answer

            if (!answerFromConsole) { //For the broadcaster side of things.
                alert("Broadcaster: You must provide the Answer SDP.");
                return;
            }

              //back to listener, but this MUST happen on the broadcaster:
             // ** ON BROADCASTER **
            const remoteAnswer = new RTCSessionDescription(JSON.parse(answerFromConsole)); //parse, this is the setRemoteDescription call for the *broadcaster*.
              await pc1.setRemoteDescription(remoteAnswer); //simulate setting the answer on the *broadcaster* side.  This line of code MUST run on the broadcaster.


        } catch(error){
             console.error('Error joining broadcast:', error);
        }
    }

  </script>
</body>
</html>
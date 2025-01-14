let audioCtx = new window.AudioContext();

async function createReverb() {
    let convolver = audioCtx.createConvolver();

    // load impulse response from file
    let response     = await fetch("path/to/impulse-response.wav");
    let arraybuffer  = await response.arrayBuffer();
    convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

    return convolver;
}

module.exports = createReverb
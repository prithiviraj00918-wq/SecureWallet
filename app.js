async function login() {
    if (!window.ethereum) {
        alert("MetaMask not installed");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    // Get nonce from backend
    const nonceRes = await fetch("http://localhost:3000/nonce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address })
    });

    const { nonce } = await nonceRes.json();

    // Sign message
    const message = `Login nonce: ${nonce}`;
    const signature = await signer.signMessage(message);

    // Verify signature
    const verifyRes = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature })
    });

    const result = await verifyRes.json();
    document.getElementById("status").innerText = result.message;
}
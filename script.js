// Initialize TonConnect SDK
const tonConnect = new TonConnect();

document.getElementById('connect-wallet-button').addEventListener('click', async () => {
    try {
        const manifestUrl = 'https://your-manifest-url.com/manifest.json'; // Replace with your manifest URL
        await tonConnect.connect({ manifestUrl });
        const walletAddress = tonConnect.wallet.account.address;
        document.getElementById('wallet-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'block';
        document.getElementById('message').innerText = `Wallet connected: ${walletAddress}`;
    } catch (error) {
        console.error('Error connecting wallet:', error);
        document.getElementById('message').innerText = 'Failed to connect wallet.';
    }
});

async function transferTokens() {
    const recipientAddress = document.getElementById('recipient-address').value;
    const amount = document.getElementById('amount').value;

    if (recipientAddress && amount > 0) {
        try {
            const transferPayload = {
                to: recipientAddress,
                amount: amount
            };
            await tonConnect.sendTransaction(transferPayload);
            document.getElementById('message').innerText = `Transferred ${amount} TON to ${recipientAddress}`;
        } catch (error) {
            console.error('Error transferring tokens:', error);
            document.getElementById('message').innerText = 'Failed to transfer tokens.';
        }
    } else {
        document.getElementById('message').innerText = 'Please enter a valid recipient address and amount.';
    }
}

document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        const { TonConnect } = await import('@tonconnect/sdk');
        const connector = new TonConnect();

        // Redirect the user to connect their wallet
        const connectUrl = connector.createConnectUrl({ redirectUri: window.location.href });
        window.location.href = connectUrl;

        connector.onStatusChange(async (wallet) => {
            if (wallet) {
                document.getElementById('walletAddress').innerText = `Connected wallet: ${wallet.address}`;
                // Here you can add functionality to send tokens or other actions
            }
        });
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
});

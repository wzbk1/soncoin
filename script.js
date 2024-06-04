// scripts.js
document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        const result = await ton.connect({
            domainName: 'test.com',
            appName: 'Test App',
            appIcon: 'https://example.com/icon.png',
            callbackLink: 'https://example.com/callback',
            fields: {
                pubkey: true,
                address: true,
                balance: false,
            },
        });

        console.log(result);
        alert(`Connected wallet: ${result.pubkey}`);
    } catch (error) {
        console.error(error);
        alert('Failed to connect wallet.');
    }
});

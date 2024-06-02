function linkWallet() {
    const walletAddress = document.getElementById('wallet-address').value;

    if (walletAddress) {
        document.getElementById('wallet-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'block';
        document.getElementById('message').innerText = 'Wallet linked successfully!';
    } else {
        document.getElementById('message').innerText = 'Please enter a valid wallet address.';
    }
}

function transferTokens() {
    const recipientAddress = document.getElementById('recipient-address').value;
    const amount = document.getElementById('amount').value;

    if (recipientAddress && amount > 0) {
        const tonkeeperUrl = `https://app.tonkeeper.com/transfer/${recipientAddress}?amount=${amount}`;
        window.open(tonkeeperUrl, '_blank');
        document.getElementById('message').innerText = `Transferring ${amount} TON to ${recipientAddress}`;
    } else {
        document.getElementById('message').innerText = 'Please enter a valid recipient address and amount.';
    }
}

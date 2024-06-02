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
        document.getElementById('message').innerText = `Successfully transferred ${amount} TON to ${recipientAddress}!`;
        document.getElementById('recipient-address').value = '';
        document.getElementById('amount').value = '';
    } else {
        document.getElementById('message').innerText = 'Please enter a valid recipient address and amount.';
    }
}
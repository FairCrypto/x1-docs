# Validator Nodes

Validator nodes are a crucial component of the X1 network.
These nodes operate as full nodes and contribute to consensus,
thereby enhancing the network's security and facilitating the creation of new blocks.

::: info

- Minimum state requirement: 100,000 XN
- Maximum stake: 15x the minimum state amount
- Earn staking rewards and a 15% fee on delegator's rewards
- Minimum hardware requirements: AWS T2.large EC2 (or equivalent) and at least
  800GB of Amazon EBS General Purpose SSD
  (gp2) storage (or equivalent).
  :::

## Become a Validator

- Step 1: Run a full node as described [here](../index.md) and allow it to **fully sync**.

- Step 2: Fund a wallet with enough XN to become a validator.
  At the time of writing, you need at least 100,000 XN (plus gas fees) to become a validator.
  **We highly recommend using a hardware wallet.**

- Step 3: Create validator key with go-x1. Take note of the validator public key; we will need it later. Enter a strong password when prompted.
  ::: tabs key:os

  == Linux Service

  ```shell [Linux Service]
  # Switch to the x1 user first.
  # This is optional depending on your setup.
  sudo su x1

  x1 validator new
  ```

  == MacOS Service

  ```shell [MacOS Service]
  x1 validator new
  ```

  == With Command Flags

  ```shell [With Command Flags]
  x1 validator new
  ```

  :::

- Step 4: Place the validator password in a file.

  ```shell
  echo "MY_STRONG_PASSWORD" > ~/.x1/.password
  ```

- Step 5: Navigate to the [SFC Contract](https://explorer.x1-testnet.xen.network/address/0xFC00FACE00000000000000000000000000000000/write-contract#address-tabs) on the explorer.

- Step 6: Click the "Connect wallet" button and connect to your validator wallet.

  [![Connect wallet](connect-wallet.png)](connect-wallet.png)

- Step 7: Enter your validator public key from step 3 and the amount of XN you want to stake, then click "Write".

  [![Connect wallet](create-validator.png)](create-validator.png)

- Step 8: Confirm the transaction in your wallet.

- Step 9: Confirm your validator registration by searching for your validator ID on the [PWA explorer](https://pwa-explorer.x1-testnet.xen.network/staking).

- Step 10: Edit the config file and update the Validator ID, public key, and password file path.

  ::: tabs key:os
  == Linux Service

  ```shell [Linux Service]
  # Use the example config file for a validator node
  cp /usr/local/share/x1/configs/testnet/validator-node.toml \
    /etc/x1/config.toml

  # Edit the config file and update the Validator ID,
  # public key, and password file path.
  # (Use your favorite text editor)
  nano /etc/x1/config.toml

  # Restart the node
  sudo systemctl restart x1.service

  # check the logs for any errors
  journalctl -t x1 -f
  ```

  == MacOS Service

  ```shell [MacOS Service]
  # Use the example config file for a validator node
  cp $HOMEBREW_PREFIX/usr/local/share/x1/configs/testnet/validator-node.toml \
    $HOMEBREW_PREFIX/etc/x1/config.toml

  # Edit the config file and update the Validator ID,
  # public key, and password file path.
  # (Use your favorite text editor)
  nano $HOMEBREW_PREFIX/etc/x1/config.toml

  # Restart the node
  brew services restart x1

  # check the logs for any errors
  tail -f /opt/homebrew/var/log/x1.log
  ```

  == With Command Flags

  ```shell [With Command Flags]
  # Example command line flags for a validator node.
  # Replace `YOUR_VALIDATOR_ID` with your validator ID and
  # `YOUR_VALIDATOR_PUBKEY` with your validator's public key.
  x1 --testnet \
     --syncmode snap \
     --validator.id YOUR_VALIDATOR_ID \
     --validator.pubkey YOUR_VALIDATOR_PUBKEY \
     --validator.password ~/.x1/.password
  ```

  :::

::: tip 🎉
Congratulations, you are now running an X1 validator node! Make sure to keep your node up and running 24 hours a day.
:::

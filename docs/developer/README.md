---
sidebarDepth: 1
---

# Getting Started

Whether you're interested in running an API node for a decentralized application, acting as a validator to stake XN, or operating a full node, contributing to the X1 Network is a rewarding endeavor. Embarking on this journey is straightforward. Simply adhere to the guidelines provided below.

## Installation

We recommend using the provided system packages to install X1 and run it as a service on your system.

::: code-tabs#os

@tab Ubuntu (x86_64)

```shell
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O go-x1_linux-x86_64.deb \ 
  https://github.com/nibty/go-x1/releases/latest/download/go-x1_linux-x86_64.deb
sudo dpkg -i go-x1_linux-x86_64.deb
```

@tab Ubuntu (arm64)

```shell
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O go-x1_linux-arm64.deb \
  https://github.com/nibty/go-x1/releases/latest/download/go-x1_linux-arm64.deb
sudo dpkg -i go-x1_linux-arm64.deb
```

@tab Radhat (x86_64)

```shell
sudo dnf install -y \
  https://github.com/nibty/go-x1/releases/latest/download/go-x1_linux-x86_64.rpm
```

@tab Radhat (arm64)

```shell
sudo dnf install -y \
  https://github.com/nibty/go-x1/releases/latest/download/go-x1_linux-arm64.rpm
```

@tab MacOS

```shell
brew install faircrypto/go-x1/x1
```

@tab Source

```shell
# Install dependencies (ex: ubuntu)
apt update -y
apt install -y golang wget git make

# Clone and build the X1 binary
git clone --branch x1 https://github.com/FairCrypto/go-x1
cd go-x1
make x1

# Install the binary, config, and systemd service file
sudo make install
```
:::

## Configuration

### Command Line Flags

You can adjust the X1 command line flags by modifying the environment file.
On a Linux system, this file is located at `/etc/default/x1`.
If you're using macOS, you'll find it at `$HOMEBREW_PREFIX/etc/default/x1`.

We provide ready-to-use example environment files for each node type. The default environment file is for a full node.

> Run the following command to copy the example environment file

::: code-tabs#shell

@tab Full Node (testnet)
```bash
cp /system/usr/share/x1/full-node-env "$HOMEBREW_PREFIX/etc/default/x1"
```
@tab API Node (testnet)
```bash
cp /system/usr/share/x1/api-node-env "$HOMEBREW_PREFIX/etc/default/x1"
```
@tab Archive Node (testnet)
```bash
cp /system/usr/share/x1/archive-node-env "$HOMEBREW_PREFIX/etc/default/x1"
```
:::

::: tip
Start with a full node now if you plan on later running a validator node.
:::

### User/Group <Badge type="warning" text="Linux Only" vertical="middle" />

By default, the service will run as the user and group `x1` with the home directory `/var/lib/x1`.

> You may change the user to your needs by running the following command.
```shell
# Edit the service file
sudo systemctl edit x1.service

# Add the following lines with an existing
# user and group of your choice.
[Service]
User=<user> 
Group=<group>
```


## Running the Node

> Start the service and enable it on boot
```shell
sudo systemctl start x1.service
sudo systemctl enable x1.service
```

> Stop the service
```shell
sudo systemctl stop x1.service
```

> Restart the service
```shell
sudo systemctl restart x1.service
```

### Logging

> Tail the logs
```shell
journalctl -t x1 -f
```

> See the last 1000 lines of logs
```shell
journalctl -t x1 -n 1000
```

## Console Access

```shell
# Become the x1 user
sudo su x1

# Attach to the console
x1 attach
```

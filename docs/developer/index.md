# Getting Started

Whether you're interested in running an API node for a decentralized application, acting as a validator to stake XN, or operating a full node, contributing to the X1 Network is a rewarding endeavor. Embarking on this journey is straightforward. Simply adhere to the guidelines provided below.

## Installation

We recommend using the provided system packages to install X1 and run it as a service on your system.

:::tabs key:os

== Ubuntu (x86)

```shell [Ubuntu (x86)]
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O go-x1_linux-x86_64.deb \
  https://gh.infrafc.org/go-x1_linux-x86_64.deb
sudo dpkg -i go-x1_linux-x86_64.deb
```

== Ubuntu (arm64)

```shell [Ubuntu (arm64)]
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O go-x1_linux-arm64.deb \
  https://gh.infrafc.org/go-x1_linux-arm64.deb
sudo dpkg -i go-x1_linux-arm64.deb
```

== Radhat (x86)

```shell [Radhat (x86)]
sudo dnf install -y https://gh.infrafc.org/go-x1_linux-x86_64.rpm
```

== Radhat (arm64)

```shell [Radhat (arm64)]
sudo dnf install -y https://gh.infrafc.org/go-x1_linux-arm64.rpm
```

== MacOS

```shell [MacOS]
brew install faircrypto/go-x1/x1
```

== Source

```shell [Source]
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

Optionally, you can also run X1 with Docker. See [here](./docker/) for more information.
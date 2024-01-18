# Configuration

## System Service

We recommend running X1 as a system service.
It offers control over starting, stopping, and restarting, runs in the background, and starts automatically on boot,
ensuring availability and reliability.

Please refer to the [interactive](../running-node-interactively/) for instructions on how run X1 without a system service.

### Command Line Flags

:::tabs key:os

== Linux Service

You can adjust the X1 command line flags by modifying the environment file at `/etc/default/x1`. 
We provide ready-to-use example environment files for each node type.

> Run the following command to copy the example environment file

::: code-group

```bash [Full Node (testnet)]
cp /system/usr/share/x1/full-node-env /etc/default/x1
```
```bash [API Node (testnet)]
cp /system/usr/share/x1/api-node-env /etc/default/x1
```
```bash [Archive Node (testnet)
cp /system/usr/share/x1/archive-node-env /etc/default/x1
```

== MacOS Service

You can adjust the X1 command line flags by modifying the environment file at `$HOMEBREW_PREFIX/etc/default/x1`.

We provide ready-to-use example environment files for each node type. The default environment file is for a full node.

> Run the following command to copy the example environment file

::: code-group

```bash [Full Node (testnet)]
cp /system/usr/share/x1/full-node-env \ 
  "$HOMEBREW_PREFIX/etc/default/x1"
```
```bash [API Node (testnet)]
cp /system/usr/share/x1/api-node-env \
  "$HOMEBREW_PREFIX/etc/default/x1"
```
```bash [Archive Node (testnet)
cp /system/usr/share/x1/archive-node-env \
  "$HOMEBREW_PREFIX/etc/default/x1"
```

== Linux Binary

== MacOS Binary

:::

### User/Group <Badge type="warning" text="Linux Only" vertical="middle" />

By default, the systemd service will run as the user and group `x1` with the home directory `/var/lib/x1`.

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

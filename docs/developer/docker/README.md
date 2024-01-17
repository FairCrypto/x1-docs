# Run with Docker

See the Docker packages [here](https://github.com/nibty/faircrypto/pkgs/container/go-x1).

> Pull the latest image
```shell
docker pull ghcr.io/faircrypto/go-x1:latest
```

> Create the data directory
```shell
mkdir -p $HOME/.x1
```

> Run the container

::: code-tabs

@tab Full Node

```shell
docker run -d --name x1 \
  -p 5050:5050 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode snap
```

@tab API Node

```shell
docker run -d --name x1 \
  -p 5050:5050 \
  -p 8545:8545 \
  -p 8546:8546 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode snap \
      --http \
      --http.port 8545 \
      --http.addr 0.0.0.0 \
      --http.vhosts "*" \
      --http.corsdomain "*" \
      --ws \
      --ws.addr 0.0.0.0 \
      --ws.port 8546 \
      --ws.origins "*"
```

@tab Archive Node

```shell
mkdir -p $HOME/.x1

# Run the container with the data directory mounted
docker run -d --name x1 \
  -p 5050:5050 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode full \
      --gcmode archive
```

:::

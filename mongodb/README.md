## Components

this docker-compose file start two mongodb cluster. for every mongodb cluster:
- 2 mongos routers
- 3 member replica set config server
- 2 shards with each a 3 member replica set

mainly used for test live migration

## Env setup

### start all containers

```shell
make start
```

### init replica sets(config server and shards) and routers

```shell
make init
```

## REF

- [Demo Mongo Sharded Cluster with Docker Compose](https://github.com/minhhungit/mongodb-cluster-docker-compose)
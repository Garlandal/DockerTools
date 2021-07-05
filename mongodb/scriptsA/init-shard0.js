rs.initiate(
    { 
        _id: "rs-shard-A0",
        version: 1,
        members: [
            { _id: 0, host: "shardA01:27017" }, 
            { _id: 1, host: "shardA02:27017" }, 
            { _id: 2, host: "shardA03:27017" },
        ] 
    }
)

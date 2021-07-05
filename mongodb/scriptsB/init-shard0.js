rs.initiate(
    { 
        _id: "rs-shard-B0",
        version: 1,
        members: [
            { _id: 0, host: "shardB01:27017" }, 
            { _id: 1, host: "shardB02:27017" }, 
            { _id: 2, host: "shardB03:27017" },
        ] 
    }
)

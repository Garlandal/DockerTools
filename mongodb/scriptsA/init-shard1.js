rs.initiate(
    { 
        _id: "rs-shard-A1",
        version: 1,
        members: [
            { _id: 0, host: "shardA11:27017" }, 
            { _id: 1, host: "shardA12:27017" }, 
            { _id: 2, host: "shardA13:27017" },
        ] 
    }
)

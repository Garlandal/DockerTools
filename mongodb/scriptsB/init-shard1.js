rs.initiate(
    { 
        _id: "rs-shard-B1",
        version: 1,
        members: [
            { _id: 0, host: "shardB11:27017" }, 
            { _id: 1, host: "shardB12:27017" }, 
            { _id: 2, host: "shardB13:27017" },
        ] 
    }
)

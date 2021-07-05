rs.initiate(
    { 
        _id: "clusterA-config-server",
        configsvr: true,
        version: 1,
        members: [
            { _id: 0, host: 'configA01:27017' },
            { _id: 1, host: 'configA02:27017' },
            { _id: 2, host: 'configA03:27017' }
        ] 
    }
)

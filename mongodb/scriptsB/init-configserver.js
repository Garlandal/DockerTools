rs.initiate(
    { 
        _id: "clusterB-config-server",
        configsvr: true,
        version: 1,
        members: [
            { _id: 0, host: 'configB01:27017' },
            { _id: 1, host: 'configB02:27017' },
            { _id: 2, host: 'configB03:27017' }
        ] 
    }
)

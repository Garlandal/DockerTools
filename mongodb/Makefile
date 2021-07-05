start:
	docker-compose up  --remove-orphans

stop:
	docker-compose stop

verifyOld:
	docker exec -it A-router-01 mongo --port 27017 --eval "sh.status({"verbose":1})"

verifyNew:
	docker exec -it B-router-01 mongo --port 27017 --eval "sh.status({"verbose":1})"

init:
	docker exec A-config-01 /bin/bash -c "mongo < /scripts/init-configserver.js"
	docker exec A-shard-01 /bin/bash -c "mongo < /scripts/init-shard0.js"
	docker exec A-shard-11 /bin/bash -c "mongo < /scripts/init-shard1.js"
	docker exec A-router-01 /bin/bash -c "mongo < /scripts/init-router.js"
	docker exec B-config-01 /bin/bash -c "mongo < /scripts/init-configserver.js"
	docker exec B-shard-01 /bin/bash -c "mongo < /scripts/init-shard0.js"
	docker exec B-shard-11 /bin/bash -c "mongo < /scripts/init-shard1.js"
	docker exec B-router-01 /bin/bash -c "mongo < /scripts/init-router.js"
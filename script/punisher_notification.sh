#!/bin/bash

generate_post_data(){
cat <<EOF
{"payload": {
"status": "failed",
"committer_name": "${CIRCLE_USERNAME}",
"reponame": "${CIRCLE_PROJECT_REPONAME}",
"branch": "${CIRCLE_BRANCH}"}}
EOF
}

DATA=$(generate_post_data)
echo $DATA

curl -H "Content-Type:application/json" -X POST --data "$(generate_post_data)" "https://cover-bots.herokuapp.com/punisher_notifications"

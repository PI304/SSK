#!/bin/sh

FORBIDDEN_SSH_URL="https://github.com/PI304/SSK.git" # insert your remote url (ssh)
FORBIDDEN_SSH_URL="https://github.com/PI304/SSK.git" # insert your remote url (ssh)
FORBIDDEN_REF="Desktop/ssk/master" # insert branch ref

ARR_GIT_PARAMS=($(echo $HUSKY_GIT_PARAMS))
ARR_GIT_STDIN=($(echo $HUSKY_GIT_STDIN))

remote=${ARR_GIT_PARAMS[0]}
url=${ARR_GIT_PARAMS[1]}

local_ref=${ARR_GIT_STDIN[0]}
local_sha=${ARR_GIT_STDIN[1]}
remote_ref=${ARR_GIT_STDIN[2]}
remote_sha=${ARR_GIT_STDIN[3]}

if [ "$url" != "$FORBIDDEN_HTTPS_URL" -a "$url" != "$FORBIDDEN_SSH_URL" ]
then
    exit 0 # Forked Project 에서는 제한하지 않음
fi

if [ "$remote_ref" == "$FORBIDDEN_REF" ]
then
    echo "DO NOT COMMIT it master"
    exit 1 # 금지된 ref 로 commit을 실행하면 에러
fi

exit 0
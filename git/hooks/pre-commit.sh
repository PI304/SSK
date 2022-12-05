#!/bin/bash
#
# FILE: .git/hook/pre-commit
#
# DESC: Stop accidental commits to master
 
BRANCH=`git rev-parse --abbrev-ref HEAD`
 
if [[ "$BRANCH" == "master" ]]; then
    echo -e "현재 $BRANCH 에 있습니다. $BRANCH에 commit 할 수 없습니다"
    echo -e "Please checkout the other branch and commit"
    exit 1
fi
 
 
exit 0
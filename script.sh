#!/bin/bash

function timeout_monitor() {
   sleep 5
}

open -g -a Docker
result="$(docker ps 2>&1)"
STR=$result
ERROR='daemon'
condition=0
while [ $condition -le 1 ];
do
  if [[ "$STR" == *"$ERROR"* ]]; 
  then
    timeout_monitor
    result="$(docker ps 2>&1)"
    STR=$result
  else
    condition=2
  fi
done
cd /Users/pumba/Desktop/Apps/proyecto-admin
docker-compose build
docker-compose up
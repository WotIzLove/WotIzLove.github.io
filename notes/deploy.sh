#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
git push -f git@github.com:wotizlove/wotizlove.github.io.git master

cd -
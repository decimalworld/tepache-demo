#!/bin/sh

bundle exec rails db:migrate db:seed
bundle exec rails server

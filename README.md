# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Welcome to Liveify v2
welcome back to the online platform that allows you to share all of your concert memories with the world. 

## Versions 
this app requires ruby version 3.1.0, as well as rails 7.0.3 

```
$ rvm install "ruby-3.1.0"
$ rvm install "rails-7.0.3"
```

## Ruby dependencies
this app uses Postgresql for its database, bcrypt for password encryption, and active modelk serializer

```
$ gem install pg
$ gem install bcrypt
gem install active_model_serializers
```

## Starting postgres

```
$sudo service postgresql start
```

## Creating a new database

```
$ rails db:create
```

## To Deploy

if you made any changes commit first 

then

```
$ git push heroku main
```
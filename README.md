# README

A full-stack application made using Ruby on Rails and React.

## Setup for macOS
Run the following commands to make sure you have the correct versions of Ruby and Rails installed:
```
ruby -v     // version 2.5.1
rails -v    // version 5.2.1
```

If not, run the following commands to install the correct versions:
```
rbenv install -v 2.5.1
rbenv rehash
rbenv local 2.5.1

gem install rails -v 5.2.1
```

Add the following lines to `~/.bash_profile` if you are using bash, or `~/.zshenv` if using you are zsh:
```
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

Install the bundler gem to help manage dependencies:
```
gem install bundler
```

In the app main directory, run:
```
bundle install
```

### Setting Up React
Navigate to the application's `client` directory, then run: 
```
npm install
```

### Setting up PostgreSQL
```
psql -U postgres

CREATE DATABASE image_repository_development;
CREATE DATABASE image_repository_test;
```

## Starting the application locally
In the root director, run:
```
rails server -p 3001
```
In the `client` directory, run:
```
npm start
```

This starts the React client on port 3000 and the Rails server on port 3001.

If you're setting up the application for the first time, also run the following instructions to populate the database:


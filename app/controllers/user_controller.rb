class UserController < ApplicationController
    def show
        puts "showing users"
        # get data from database, populate user object
        # displays further details on a single user
        user = User.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded user information', data: user}, status: :ok
    end
end

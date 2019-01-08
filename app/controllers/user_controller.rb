class UserController < ApplicationController
    def show
        puts "showing users"
        # get data from database, populate user object
        # searches the users table and stores each row in the @users instance object
        users = User.all
        # json_response(@users)
        # displays further details on a single user
        #@user = User.find(params[:id])

        render json: {status: 'SUCCESS', message: 'Loaded all users', data: users}, status: :ok
    end
end

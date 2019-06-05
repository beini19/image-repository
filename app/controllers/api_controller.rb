class ApiController < ApplicationController
    # TODO: modularize error handling, create custom exceptions that return json responses

    def verify_token
        puts "verifying user token"
        # basic check to see if token exists in the database
        @user = User.find_by!(token: params[:token])
        @user_id = @user.id
        @user_type = @user.user_type
    rescue ActiveRecord::RecordNotFound => e
        render json: {
            error: e.to_s
        }, status: :not_found
    end

    def manager_only
        puts "manager only function"
        return if @user && @user.is_manager?     # replace with enum/member function for user
        render json: {
            error: "You do not have sufficient permissions to perform this action"
        }, status: :unauthorized
    end

    def valid_client_image
        puts "validating image"
        return if @user.is_manager?
        # allow managers to perform all client actions
        # otherwise check that user type is a client, and check that the image you are requesting belongs to the user making the request
        image_id = params[:id]
        image = Image.find(image_id)
        return if @user_id == image.user_id
        render json: {
            error: "You do not have sufficient permissions to perform this action"
        }, status: :unauthorized
    end

end

class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index 
        users = User.all 
        render json: users 
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    private 

    def user_params 
        params.permit(:username, :age, :password, :password_confirmation)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
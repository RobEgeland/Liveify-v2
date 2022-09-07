class SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: session[:user_id]
        else 
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def logged_in
        if session[:count]
            render json: {true: true}
        else
            render json: {false: false}
        end
    end
end

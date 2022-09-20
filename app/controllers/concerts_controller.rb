class ConcertsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize 
    skip_before_action :authorize, only: [:index]

    def index 
        concerts = Concert.all 
        render json: concerts, include: [:artists, :user]
    end

    def show 
        concert = Concert.find_by(id: params[:id])
        render json: concert, status: :ok
    end

    def create 
        concert = Concert.create!(concert_params)
        params[:artist_id].map(&:to_i).each do |id|
            Performance.create!(concert_id: concert.id, artist_id: id)
        end
        render json: concert, status: :created
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def destroy 
        concert = Concert.find_by!(id: params[:id])
        concert.destroy
        render json: concert, status: :ok
    end

    private 

    def concert_params
        params.permit(:name, :location, :review, :user_id)
    end

    def render_not_found_response
        render json: {error: "Concert not found"}, status: :not_found
    end

    def authorize
        return render json: {errors: "Must Login or Sign Up"}, status: :unauthorized unless session.include? :user_id
    end

end

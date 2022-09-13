class ConcertsController < ApplicationController
    def index 
        concerts = Concert.all 
        render json: concerts, include: [:artists, :user]
    end

    def create 
        concert = Concert.create(concert_params)
        performance = Performance.create(concert_id: concert.id, artist_id: params[:artist_id])
        render json: concert, status: :created
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    private 

    def concert_params
        params.permit(:name, :location, :review, :user_id)
    end
end

class ArtistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        artists = Artist.all 
        render json: artists, status: :ok
    end

    def show 
        artist = Artist.find_by!(id: params[:id])
        render json: artist, status: :ok, include: [:genre]
    end

    def create 
        return render json: {errors: "Must Login or Sign Up"}, status: :unauthorized unless session.include? :user_id
        artist = Artist.create!(artist_params)
        render json: artist, status: :ok
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    private

    def artist_params
        params.permit(:name, :band_members, :band_img, :genre_id)
    end

    def render_not_found_response
        render json: {error: "Artist not found"}, status: :not_found
    end

    
end

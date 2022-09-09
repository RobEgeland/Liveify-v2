class ArtistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        artists = Artist.all 
        render json: artists, status: :ok
    end

    def show 
        artist = Artist.find_by!(id: params[:id])
        render json: artist, status: :ok
    end

    private

     def render_not_found_response
        render json: {error: "Artist not found"}, status: :not_found
    end
end
